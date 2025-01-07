/* 
[Problem Statement]
Write a func `bestSum(targetSum, nubmers)` that takes a targetSum and an array of numbers as arguments
The func shd return an array containing the SHORTEST combination of elements that add up to targetSum
Return null if combination not found
Return ANY result if there is a tie
*/

const bestSum = (targetSum: number, numbers: number[]): number[] | null => {
	if (targetSum == 0) return [];
	if (targetSum < 0) return null;

	let bestSumArr: number[] | null = null;

	for (const num of numbers) {
		const subTarget: number = targetSum - num;
		const resultArr: number[] | null = bestSum(subTarget, numbers);
		if (resultArr !== null) {
			if (bestSumArr === null || bestSumArr.length > resultArr.length + 1) {
				bestSumArr = [...resultArr, num];
			}
		}
	}

	return bestSumArr;
};

/*
[Time complexity]
Since arr.length is O(1), Big-O of bestSum is the same as howSum -> O(n^m * m)

[Space complexity]
At any given point of time, there are at most m calls in the stack and for each call it will be storing, at worst, an array of length m, 
-> O(m * m) <=> O(m^2)
*/

const bestSumMem = (
	targetSum: number,
	numbers: number[],
	mem: { [idx: number]: number[] | null } = {}
): number[] | null => {
	if (targetSum in mem) return mem[targetSum];
	if (targetSum == 0) return [];
	if (targetSum < 0) return null;

	let bestSumArr: number[] | null = null;

	for (const num of numbers) {
		const subTarget: number = targetSum - num;
		const resultArr: number[] | null = bestSumMem(subTarget, numbers, mem);
		if (resultArr !== null) {
			if (bestSumArr === null || bestSumArr.length > resultArr.length + 1) {
				bestSumArr = [...resultArr, num];
			}
		}
	}

	mem[targetSum] = bestSumArr; // be that null or shortest found
	return bestSumArr;
};

/*
[Time complexity]
Memoization shrinks the number of max possible calculations to n * m and for each call there is a copy of array that takes m steps
-> O(n*m * m) <=> O(n * m^2)

[Space complexity]
m keys with possible m values for each key -> O(m^2)
*/

module.exports = {
	bestSum,
	bestSumMem,
};

/* 
[Notes]
1. const bestSumArr: number[] | null = null; would lead to segment fault as const var values cannot be re-assigned and doing so will lead to segment fault
2. expect().toEqual() is used to check objects, instead of values
*/
