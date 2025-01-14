/* 
[Problem Statement]
Write a func `canSum(targetSum, nubmers)` that takes a targetSum and an array of numbers as arguments
The func shd return a bool indicating whethere or not it is possible to generate the targetSum using numbers from the array
You may use an element of the array as many times as needed
You may assume that all input numbers are nonnegative
*/

const canSum = (targetSum: number, numbers: number[]): boolean => {
	if (targetSum == 0) return true;
	if (targetSum < 0) return false;

	for (const num of numbers) {
		const subTarget: number = targetSum - num;
		const result: boolean = canSum(subTarget, numbers);
		if (result === true) return true;
	}

	return false;
};

/*
[Time complexity]
Given 
height m = target.length
breadth n = wordBank.length 
For each level, there are at most n branches for the nodes
Tree height is m, max number of times targetSum can be subtracted by any of the n numbers
So the time complexity of the problem is exponential, O(n^m)

[Space complexity]
At most m calls can be handled in stack, so polynomial, O(m)
*/

const canSumMem = (targetSum: number, numbers: number[], mem: { [idx: number]: boolean } = {}): boolean => {
	if (targetSum in mem) return mem[targetSum];
	if (targetSum == 0) return true;
	if (targetSum < 0) return false;

	for (const num of numbers) {
		const subTarget: number = targetSum - num;
		const result: boolean = canSumMem(subTarget, numbers, mem);
		if (result === true) {
			mem[targetSum] = true;
			return true;
		}
	}

	mem[targetSum] = false;
	return false;
};

/*
[Time complexity]
Since results are cached, only at most m * n possible calculations remain. So time complexity is reduced to O(m * n)

[Space complexity]
remains the same
*/

module.exports = {
	canSum,
	canSumMem,
};

/*
Side notes
foreach loop is not used in the above because it discards return values.

Reference
1. Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
