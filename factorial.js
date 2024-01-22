/***Factorial Calculation:**
    - Implement a function to calculate the factorial of a number using recursion. */

function factCalc(numero) {
    if (numero === 0) {
        return 1;
    } else {
        return numero * factCalc(numero - 1);
    }
}

/*let resultado = factCalc(5)
console.log(resultado)*/

module.exports = factCalc;

