const reverseString = require("./reverseString.js");

test("reverse single-word string", () => {
    expect(reverseString("olleH")).toBe("Hello");
});

test("reverse multi-word string", () => {
    expect(reverseString("nuahS si eman yM")).toBe("My name is Shaun");
});


