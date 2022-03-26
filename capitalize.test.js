const capitalize = require('./capitalize.js');

test('capitalize first letter when all letters small', () => {
    expect(capitalize("hello")).toBe("Hello")
});

test("capitalize first letter when all letters capitalized", () => {
    expect(capitalize("HELLO THERE")).toBe("Hello there")
});


