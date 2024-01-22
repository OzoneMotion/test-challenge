const fizzBuzz = require("../fizzBuzz");

test("A number divided by 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
})

test("A number divided by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
})

test("A number divided by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
})