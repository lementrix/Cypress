import { add, subtract, multiply, divide } from '../../Calculator';

describe('Calculator Unit Tests', () => {
    it('adds two numbers', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('subtracts two numbers', () => {
        expect(subtract(5, 3)).to.equal(2);
    });

    it('multiplies two numbers', () => {
        expect(multiply(4, 3)).to.equal(12);
    });

    it('divides two numbers', () => {
        expect(divide(6, 2)).to.equal(3);
    });

    it('returns error when dividing by zero', () => {
        expect(divide(6, 0)).to.equal('Error');
    });
});
