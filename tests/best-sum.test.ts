const best_sum = require("../src/best-sum.ts");

// // Usage: test('description', testFunction)
test("bestSum(8, [2, 3, 5]) === [3, 5]", () => {
	let result: number[] | null = best_sum.bestSum(8, [2, 3, 5]);
	expect(result?.sort()).toEqual([3, 5]);
});

test("bestSum(7, [5, 3, 4, 7]) === [7]", () => {
	let result: number[] | null = best_sum.bestSum(7, [5, 3, 4, 7]);
	expect(result?.sort()).toEqual([7]);
});

test("bestSum(8, [1, 4, 5]) === [4, 4]", () => {
	let result: number[] | null = best_sum.bestSum(8, [1, 4, 5]);
	expect(result?.sort()).toEqual([4, 4]);
});

test("bestSum(7, [2, 4]) === null", () => {
	expect(best_sum.bestSum(7, [2, 4])).toBe(null);
});

test("bestSum(25, [1, 2, 5, 25]) === [25]", () => {
	let result: number[] | null = best_sum.bestSum(25, [1, 2, 5, 25]);
	expect(result?.sort()).toEqual([25]);
});

test("bestSumMem(25, [1, 2, 5, 25]) === [25]", () => {
	let result: number[] | null = best_sum.bestSumMem(25, [1, 2, 5, 25]);
	expect(result?.sort()).toEqual([25]);
});
