import { add } from './calc';

describe('calculator', () => {
    it('should be able to add two numbers', () => {
        expect(add(1, 2)).toEqual(3);
    });
});