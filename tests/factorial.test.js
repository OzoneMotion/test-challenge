const factCalc = require("../factorial");

test("Evaluate the factorial from a given number", () => {
    expect(factCalc(5)).toBe(120)
})