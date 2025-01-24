const fib_tab = require("../src/fib-tab.ts");

// Usage: test('description', testFunction)
test("fibTab(1) = 1", () => {
	expect(fib_tab.fibTab(1)).toBe(1);
});

test("fibTab(4) = 3", () => {
	expect(fib_tab.fibTab(4)).toBe(3);
});

test("fibTab(5) = 5", () => {
	expect(fib_tab.fibTab(5)).toBe(5);
});

test("fibTab(50) = 12586269025", () => {
	expect(fib_tab.fibTab(50)).toBe(12586269025);
});
