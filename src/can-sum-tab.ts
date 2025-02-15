/* 
[Problem Statement]
Write a func `canSum(targetSum, nubmers)` that takes a targetSum and an array of numbers as arguments
The func shd return a bool indicating whethere or not it is possible to generate the targetSum using numbers from the array
You may use an element of the array as many times as needed
You may assume that all input numbers are nonnegative
*/

const canSumTab = (targetSum: number, numbers: number[]): boolean => {
	const table: Array<boolean> = Array(targetSum+1).fill(false);
	table[0] = true;

	for (let i=0; i <= targetSum; i++) {
		for (const number of numbers) {
			if (table[i] === true) {
				if (i+number <= targetSum) table[i+number] = true;
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
problem asking for boolean -> so false
3. trivial answer
true when target sum === 0
4. logic to interate thru the array
if value of curr position i (targetSum) is true, it follows that i + number in numbers should also be true
-> table[i+table] should also be true

[Time complexity]
Nested loop over the array -> O(m * n), polynomial

[Space complexity]
An array of size m = targetSum is stored in heap thruout the iteration. so O(m), linear.
*/

module.exports = {
	canSumTab,
};
