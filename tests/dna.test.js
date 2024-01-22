const testDNA = require('../dna');

test("Evaluate DNA secuence", () => {
    expect(testDNA("CTAbmnnbmnbmGGGTA")).toEqual("CTAGGGTA");
})