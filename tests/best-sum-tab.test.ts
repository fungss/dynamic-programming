const best_sum = require("../src/best-sum-tab.ts");

// // Usage: test('description', testFunction)
test("bestSumTab(8, [2, 3, 5]) === [3, 5]", () => {
	let result: number[] | null = best_sum.bestSumTab(8, [2, 3, 5]);
	expect(result?.sort()).toEqual([3, 5]);
});

test("bestSumTab(7, [5, 3, 4, 7]) === [7]", () => {
	let result: number[] | null = best_sum.bestSumTab(7, [5, 3, 4, 7]);
	expect(result?.sort()).toEqual([7]);
});

test("bestSumTab(8, [1, 4, 5]) === [4, 4]", () => {
	let result: number[] | null = best_sum.bestSumTab(8, [1, 4, 5]);
	expect(result?.sort()).toEqual([4, 4]);
});

test("bestSumTab(7, [2, 4]) === null", () => {
	expect(best_sum.bestSumTab(7, [2, 4])).toBe(null);
});

test("bestSumTab(25, [1, 2, 5, 25]) === [25]", () => {
	let result: number[] | null = best_sum.bestSumTab(25, [1, 2, 5, 25]);
	expect(result?.sort()).toEqual([25]);
});
