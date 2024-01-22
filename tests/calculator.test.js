const { default: expect } = require('expect');
const calculator = require('../calculator');

test("adds a + b", () => {
    expect(calculator.sum(1, 2)).toBe(3);
})

test("substracts a - b", () => {
    expect(calculator.substract(3, 2)).toBe(1);
})

test("multiplies a * b", () => {
    expect(calculator.multiply(3, 5)).toBe(15)
})

test("divides a / b to", () => {
    expect(calculator.divide(10, 2)).toBe(5);
})

test("Raises to power a ^ b", () => {
    expect(calculator.power(3, 3)).toBe(27)
})
