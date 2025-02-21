/* 
[Problem Statement]
Write a func `bestSum(targetSum, nubmers)` that takes a targetSum and an array of numbers as arguments
The func shd return an array containing the SHORTEST combination of elements that add up to targetSum
Return null if combination not found
Return ANY result if there is a tie
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
	bestSumTab,
};