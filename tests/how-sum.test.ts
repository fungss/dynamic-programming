const how_sum = require("../src/how-sum.ts");

// Usage: test('description', testFunction)
test("howSum(7, [2, 3]) returns result that can sum up to 7", () => {
	const targetSum: number = 7;
	const resultList: number[] = how_sum.howSum(7, [2, 3]);
	expect(resultList.reduce((total: number, element: number) => total + element)).toBe(targetSum);
});

test("howSum(7, [5, 3, 4, 7]) returns result that can sum up to 7", () => {
	const targetSum: number = 7;
	const resultList: number[] = how_sum.howSum(7, [5, 3, 4, 7]);
	expect(resultList.reduce((total: number, element: number) => total + element)).toBe(targetSum);
});

test("howSum(7, [2, 4]) == null", () => {
	expect(how_sum.howSum(7, [2, 4])).toBe(null);
});

test("howSum(300, [7, 14]) == null", () => {
	expect(how_sum.howSum(300, [7, 14])).toBe(null);
});

test("howSumMem(300, [7, 14]) == null", () => {
	expect(how_sum.howSumMem(300, [7, 14])).toBe(null);
});

test("howSumTab(7, [2, 3]) returns result that can sum up to 7", () => {
	const targetSum: number = 7;
	const resultList: number[] = how_sum.howSumTab(7, [2, 3]);
	expect(resultList.reduce((total: number, element: number) => total + element)).toBe(targetSum);
});

test("howSumTab(7, [5, 3, 4, 7]) returns result that can sum up to 7", () => {
	const targetSum: number = 7;
	const resultList: number[] = how_sum.howSumTab(7, [5, 3, 4, 7]);
	expect(resultList.reduce((total: number, element: number) => total + element)).toBe(targetSum);
});

test("howSumTab(7, [2, 4]) == null", () => {
	expect(how_sum.howSumTab(7, [2, 4])).toBe(null);
});

test("howSumTab(300, [7, 14]) == null", () => {
	expect(how_sum.howSumTab(300, [7, 14])).toBe(null);
});
