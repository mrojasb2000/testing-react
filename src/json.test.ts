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
            expect(actual.length).toBe(1);
            expect(actual).toEqual(expected);
        });
    });
});