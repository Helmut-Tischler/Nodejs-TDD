const assert = require('assert'); 
const calculator = require('../src/calculator'); 

describe('calculator.calculate() Test', () => { 
    it('should equal 2', () => { 
        const result = calculator.calculate(1, 1, '+'); 
        assert.equal(result, 2); 
    }); 

    it('2 - 1 should equal 1', () => { 
        const result = calculator.calculate(2, 1, '-'); 
        assert.equal(result, 1); 
    })

    it('3 times 2 should equal 6', () => { 
        const result = calculator.calculate(3, 2, '*'); 
        assert.equal(result, 6); 
    })
});