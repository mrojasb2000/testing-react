import { add } from './calc';

describe('calculator', () => {
    beforeEach(() => {
        // setup code if needed
        console.log('BeforeEach called');
    });
    afterEach(() => {
        // teardown code if needed
        console.log('AfterEach called');
    })
    describe('should perform addition', () => {
        it('adds two positive numbers', () => {
            const actual: number = add(1, 2);
            const expected: number = 3;
            expect(actual).toEqual(expected);
        });
        it('adds two negatives numbers', () => {
            expect(add(-1, -2)).toEqual(-3);
        });
        it('adds one positive and one negative numbers', () => {
            expect(add(1, -2)).toEqual(-1);
        });
    })
    it('should be able to add two numbers', () => {
        expect(add(1, 2)).toEqual(3);
    });
    it('should return true when four number not equals to three number', () => {
        expect(4).not.toEqual(3);
    });
    it('should return true when string match with patterns', () => {
        expect("juntao").toMatch(/\w+/);
    });
    it('should return true when number match with patterns', () => {
        expect("185-3345-3343").toMatch(/^\d{3}-\d{4}-\d{4}$/);
    });
    it('should return false when number not match with patterns', () => {
        expect("1853-3345-3343").not.toMatch(/^\d{3}-\d{4}-\d{4}$/);
    });
});