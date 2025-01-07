/* 
[Problem Statement]
Write a func `canConstruct(target, wordBank)` that accepts a target string and an array of strings.
The func shd return a boolean indicating whether or not the target can be constructed 
by concatenating elements of the workbank array.
Elements of wordBank are reusable.
*/

const canConstruct = (target: string, wordBank: Array<string>): boolean => {
	if (target.length === 0) return true;

	for (const word of wordBank) {
		if (target.includes(word) === true) {
			const subTarget: string = target.replace(word, "");
			const result: boolean = canConstruct(subTarget, wordBank);
			if (result === true) return result;
		}
	}
	return false;
};

/*
[Time complexity]
Given 
level m = wordBank.length 
height n = target.legnth
Considering the worst case, for each func call, there are m number of edges
So total number of calls = (n^(m+1) - 1)/n-1 (geometric sum) ~ n^m (ignoring constant term, exponential)
For each call there are two operations,
1) target.includes(word) - O(n), linearly search thru target
2) target.replace(word, "") - O(n), copying m, at worst, elements 1 by 1 to a new array <=> also linear
-> 2n ~ n (ignoring constant term)
As a result, time complexity is O(n^m * m)

[Space complexity]
At any point of time during the execution, there are at most m number of calls
And for each call, there will be an array storing m elements at worst
So space complexity is O(m^2)
*/

const canConstructMem = (target: string, wordBank: string[], mem: { [idx: string]: boolean } = {}): boolean => {
	if (target in mem) return mem[target];
	if (target.length === 0) return true;

	for (const word of wordBank) {
		if (target.includes(word) === true) {
			const subTarget: string = target.replace(word, "");
			const result: boolean = canConstructMem(subTarget, wordBank, mem);
			if (result === true) {
				mem[subTarget] = result;
				return result;
			}
		}
	}
	mem[target] = false;
	return false;
};

/*
[Time complexity]
Total number of func calls shrinks to ~ n * m with memoization.
Taking the additional operations into account, time complexity becomes O(n*m * m) <=> O(n * m^2)

[Space complexity]
The mem object has m keys at worst, and for each m, there are 2 possible values (true or false).
Comparing this term against the space required from the calls, 2m < m^2 asymptotically
So space complexity remains as O(m^2)
*/

module.exports = {
	canConstruct,
	canConstructMem,
};
