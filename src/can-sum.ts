/* Problem Statement
Write a func `canSum(targetSum, nubmers)` that takes a targetSum and an array of numbers as arguments.
The func shd return a bool indicating whethere or not it is possible to generate the targetSum using numbers from the array.
You may use an element of the array as many times as needed.
You may assume that all input numbers are nonnegative.
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

module.exports = {
	canSum,
	canSumMem,
};
