const caesarCipher = require("./caesarCipher.js");

test("shift string without punctuation", () => {
    expect(caesarCipher("hello", 5)).toBe("mjqqt");
});

test("shift string where there is rollover,", () => {
    expect(caesarCipher("Shaun", 50)).toBe("&;4HA");
});

test("shift negative string where there is rollover,", () => {
    expect(caesarCipher("Yo", -100)).toBe("Tj");
});
