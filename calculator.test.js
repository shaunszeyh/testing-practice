const calculator = require("./calculator.js");

test("add two integers together", () => {
    expect(calculator.add(10, 11)).toEqual(21);
});

test("add two numbers together", () => {
    expect(calculator.add(1, 3.4)).toEqual(4.4);
});

test("subtract one number from another", () => {
    expect(calculator.subtract(10, 6)).toEqual(4);
});

test("divide one number from another", () => {
    expect(calculator.divide(2, 0.25)).toEqual(8);
});

test("divide by zero", () => {
    expect(calculator.divide(1, 0)).toBeNull();
});

test("multiply two numbers", () => {
    expect(calculator.multiply(4, 2.3)).toEqual(9.2);
});
