/* 
[Problem Statement]
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
[Time complexity]
Given 
height m = target.length
breadth n = wordBank.length
total number of leaves = tot num of func calls = 1 + 1 * n + 1 * n^2 + ... 1 * n^(m+1) 
-> (n^(m+1) - 1)/n-1 (geometric sum) 
-> focus on dominant term and ignore constant factors
-> O(n^m)
Since for each func calls, howSum has an extra step that is taking linear time, and 
at worst copying m elements from the returned values of its sub-calls
-> Big-O becomes O(n^m * m).

[Space complexity]
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

/*
[Time complexity]
Same as canSumMem but with an additional step to copy array -> O(n*m * m) <=> O (n*m^2).

[Space complexity]
Dominant term changes from the at-most m function calls to
the cache as the cached values are at-most up to m elements.
Give there can be m keys, the space of the cache object is m * m = m^2.
So space complexity becomes O(m ^ 2).
*/

const howSumTab = (targetSum: number, numbers: number[]): number[] | null => {
	const table: Array<number[]> = Array(targetSum+1).fill(null);
	table[0] = [];

	for (let i=0; i <= targetSum; i++) {
		for (const number of numbers) {
			if (table[i] !== null) {
				if (i+number <= targetSum) table[i+number] = [... table[i], number];
			}
		}
	}

	return table[targetSum];
};

/*
[Tabulation recipe]
1. size of table
an array of length === targetSum, coz it's shrinkable thru iteration
2. value at init
problem asking for number[] | null -> so null
3. trivial answer
[] when target sum === 0
4. logic to interate thru the array
same as can-sum-tab
if value of curr position i (targetSum) is true, it follows that i + number in numbers should also be true
-> table[i+table] should also be true
but diff in that how-sum-tab start with [] and accumulate the number thru iteration

[Time complexity]
1. nested loop over the array -> m * n steps
2. an addition step to copy, at worst, m elements over to a new array
-> O(m*n * m) <-> O(m^2*n) cubic

[Space complexity]
1. An array of size m = targetSum is stored in heap thruout the iteration
2. Each iteration would require space to store a new array with m element at worst
-> O(m * m) <-> O(m^2) quadratic
*/

module.exports = {
	howSum,
	howSumMem,
	howSumTab,
};
