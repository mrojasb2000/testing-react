import jsonpath from 'jsonpath';

describe('jest matchers', () => {
    describe('custom matchers complex data', () => {
        interface User {
            name: string;
            address: string;
            projects: Project[];
        }

        interface Project {
            name: string;
        }

        const user: User = {
            name: "Juntao Qiu",
            address: "Xian, Shaanxi, China",
            projects: [
                {name: "ThoughtWorks University"},
                {name: "ThoughtWorks Core Business Beach"},
            ],
        };

        it('should return true when object contains custom property values', () => {
            const matcher = expect.objectContaining({
                name: expect.stringContaining('Juntao'),
                projects: expect.arrayContaining([
                    {name: expect.stringContaining('ThoughtWorks')},
                ]),
            });
            expect(user).toEqual(matcher);
        });
        describe('jsonpath matchers', () => {
            it('should return array when jsonpath query get projects', () => {
                const actual = jsonpath.query(user, '$.projects');
                const expected = 1;
                expect(actual.length).toBe(expected);
            });
            it('should return array with one element when jsonpath query get first project', () => {
                const actual = jsonpath.query(user, '$.projects[0]');
                expect(actual.length).toBe(1);
            });
            it('should return array with property name when jsonpath query get first project', () => {
                const actual = jsonpath.query(user, '$.projects[0].name');
                const expected: string[] = ['ThoughtWorks University'];
                expect(actual).toEqual(expected);
            });
            it("should return empty array when jsonpath query didn't match anything", () => {
                const actual = jsonpath.query(user, '$.projects[0].address');
                const expected: number = 0;
                expect(actual.length).toBe(expected);
            });
        });
        describe('extend the expect function', () => {
            expect.extend({
                toMatchJsonPath(received: any, argument: any) {
                    const result = jsonpath.query(received, argument);
                    if (result.length > 0) {
                        return {
                            pass: true,
                            message: () => 'matched',
                        };
                    } else {
                        return {
                            pass: false,
                            message: () => `expected ${JSON.stringify(received)} to match ${argument}`,
                        }
                    }
                },
            });
            describe('jsonpath', () => {
                it('should return successfully when json contains property username', () => {
                    const user = {
                        name: 'Juntao',
                    };
                    // @ts-ignore
                    expect(user).toMatchJsonPath('$.name');
                });
                it('should return error when json does not contain property age', () => {
                    const user = {
                        name: 'Juntao',
                        address: 'Xian, Shaanxi, China',
                    };
                    // @ts-ignore
                    expect(user).not.toMatchJsonPath('$.age');
                });
            });
        });
    });
});