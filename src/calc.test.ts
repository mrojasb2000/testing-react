import { add } from './calc';

describe('calculator', () => {
    beforeEach(() => {
        // setup code if needed
    });
    afterEach(() => {
        // teardown code if needed
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
});