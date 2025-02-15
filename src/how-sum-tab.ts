/* 
[Problem Statement]
Write a func `howSum(targetSum, nubmers)` that takes a targetSum and an array of numbers as arguments.
The func shd return an array containing ANY combination of elements that add up to targetSum.
Return null if combination not found.
Return ANY single one if multiple combinations avaialble.
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
	howSumTab
};
