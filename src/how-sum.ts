/* Problem Statement
Write a func `howSum(targetSum, nubmers)` that takes a targetSum and an array of numbers as arguments.
The func shd return an array containing ANY combination of elements that add up to targetSum.
Return null if combination not found.
Return ANY single one if multiple combinations avaialble.
*/
const howSum = (targetSum: number, numbers: number[]): number[] | null => {
	if (targetSum == 0) return [];
	if (targetSum < 0) return null;

	for (const num of numbers) {
		const subTarget: number = targetSum - num;
		const resultArr: number[] | null = howSum(subTarget, numbers);
		if (resultArr !== null) {
			return [...resultArr, num];
		}
	}

	return null;
};

/*
Time complexity
From canSum,
total number of leaves = tot num of func calls = 1 + 1 * n + 1 * n^2 + ... 1 * n^(m+1) 
-> (n^(m+1) - 1)/n-1 (geometric sum) 
-> focus on dominant term and ignore constant factors
-> O(n^m)
Since for each func calls, howSum has an extra step that is taking linear time, and 
at worst copying m elements from the returned values of its sub-calls
-> Big-O becomes O(n^m * m).

Space complexity
Even tho additional space is required for the array, 
there are only 2 arrays at most with longest length of m <=> constant term at worst.
So remains as O(m).
*/

const howSumMem = (
	targetSum: number,
	numbers: number[],
	mem: { [idx: number]: number[] | null } = {}
): number[] | null => {
	if (targetSum in mem) return mem[targetSum];
	if (targetSum == 0) return [];
	if (targetSum < 0) return null;

	for (const num of numbers) {
		const subTarget: number = targetSum - num;
		const resultArr: number[] | null = howSumMem(subTarget, numbers, mem);
		if (resultArr !== null) {
			mem[targetSum] = [...resultArr, num];
			return mem[targetSum];
		}
	}

	mem[targetSum] = null;
	return null;
};

/* With memoization
Time - Same as canSumMem but with an additional step to copy array -> O(n*m * m) <=> O (n*m^2).

Space
Dominant term changes from the at-most m function calls to
the cache as the cached values are at-most up to m elements.
Give there can be m keys, the space of the cache object is m * m = m^2.
So space complexity becomes O(m^2).
*/

module.exports = {
	howSum,
	howSumMem,
};
