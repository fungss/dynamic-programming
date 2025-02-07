const can_sum = require("../src/can-sum-tab.ts");

// Usage: test('description', testFunction)
test("canSumTab(7, [2, 3]) == true", () => {
	expect(can_sum.canSumTab(7, [2, 3])).toBe(true);
});

test("canSumTab(7, [5, 3, 4, 7]) == true", () => {
	expect(can_sum.canSumTab(7, [5, 3, 4, 7])).toBe(true);
});

test("canSumTab(7, [2, 4]) == false", () => {
	expect(can_sum.canSumTab(7, [2, 4])).toBe(false);
});

test("canSumTab(8, [2, 3, 5]) == true", () => {
	expect(can_sum.canSumTab(8, [2, 3, 5])).toBe(true);
});

test("canSumTab(300, [7, 14]) == false", () => {
	expect(can_sum.canSumTab(300, [7, 14])).toBe(false);
});
