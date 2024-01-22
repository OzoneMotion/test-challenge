/*
**DNA String Filter:**
       - Create a function to process a DNA string (e.g., 'CTAGGGTA').
       - The function should remove any non-canonical DNA bases (anything other than 'C', 'T', 'A', 'G').
       - The function should be case sensitive (keep 'C' but remove 'c').
       - If the DNA string is empty, return an empty string.
*/

function testDNA(sequence) {
    let basePair = ["A", "T", "C", "G"];
    let newseq = "";
    for (let i = 0; i < sequence.length; i++) {
        if (basePair.includes(sequence[i])) {
            newseq += sequence[i];
        }
    }
    return newseq;
}

module.exports = testDNA;