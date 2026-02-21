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
            expect(add(1, 2)).toEqual(3);
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
});