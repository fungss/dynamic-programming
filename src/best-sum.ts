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
Since arr.length is O(1), Big-O of bestSum is the same as howSum
so
Given 
height m = target.length
breadth n = wordBank.length
Number of total func calls same as canConstruct <=> n^m (geometric sum)
For each func call, copying m elements at worst -> m number of operations
-> O(n^m * m), exponential

[Space complexity]
At any given point of time, there are at most m calls in the stack and 
for each call, 
it will be storing an array of length m at worst
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
Memoization shrinks the number of max possible calculations to n * m and 
for each call there is a copy of array that takes m steps
-> O(n*m * m) <=> O(n * m^2)

[Space complexity]
m keys with possible m values for each key -> O(m^2)
*/

const bestSumTab = (targetSum: number, numbers: number[]): number[] | null => {
	const table: Array<number[]> = Array(targetSum+1).fill(null);
	table[0] = [];

	for (let i=0; i <= targetSum; i++) {
		for (const number of numbers) {
			if (table[i] !== null) {
				if (i+number <= targetSum) {
					const newArray = [... table[i], number];
					if (table[i+number] === null) {
						table[i+number] = newArray;
					} else {
						if (table[i+number].length > newArray.length) {
							table[i+number] = newArray;
						}
					}
				}
			}
		}
	}

	return table[targetSum];
};

/*
[Time complexity]
1. Memoization shrinks the number of max possible calculations to n * m,
2. The arr.length is stored w/ the underlying structure and the comparison arr1.length > arr2.length is O(1), and
3. for each call there is a copy of array that takes m steps
-> O(n*m * m) <=> O(n * m^2)

[Space complexity]
Nothing has changed as of memory usage, so same as how-sum-tab.ts
-> m keys with possible m values for each key -> O(m^2)
*/

module.exports = {
	bestSum,
	bestSumMem,
	bestSumTab,
};

/* 
[Notes]
1. const bestSumArr: number[] | null = null; would lead to segment fault as const var values cannot be re-assigned and doing so will lead to segment fault
2. expect().toEqual() is used to check objects, instead of values
*/
