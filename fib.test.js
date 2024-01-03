const fib = require("./fib") 

// Usage: test('description', testFunction)
test('fib(1) = 1', () => {
    expect(fib.fibRecur(1)).toBe(1);
});

test('fib(4) = 3', () => {
    expect(fib.fibRecur(4)).toBe(3);
});

test('fib(5) = 5', () => {
    expect(fib.fibRecur(5)).toBe(5);
});

test('fib(50) = 12586269025', () => {
    expect(fib.fibMem(50)).toBe(12586269025);
});