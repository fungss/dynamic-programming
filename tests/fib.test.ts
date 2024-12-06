const fib = require("../src/fib.ts") 

// Usage: test('description', testFunction)
test('Throw error for negative input', () => {
    expect(() => fib.fibRecur(-22)).toThrow('Input must be positive number.');
});

test('fib(1) = 1', () => {
    expect(fib.fibRecur(1)).toBe(1);
});

test('fib(4) = 3', () => {
    expect(fib.fibRecur(4)).toBe(3);
});

test('fib(5) = 5', () => {
    expect(fib.fibRecur(5)).toBe(5);
});

test('Expecting faster computation for fib(50) = 12586269025', () => {
    expect(fib.fibMem(50)).toBe(12586269025);
});