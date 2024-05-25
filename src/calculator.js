const calculator = {}; 
calculator.calculate = (num1, num2, operation) => { 
    
    switch(operation) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        default: return num1 * num2;
    }
    
    //Other Solution... 
    //Have not the same elegance as above!
    /*if(operation === '+') 
        return num1 + num2;
    else if(operation === '-')
        return num1 - num2; 
    return num1 * num2
    */
} 
module.exports = calculator;