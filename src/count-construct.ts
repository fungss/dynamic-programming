/* 
[Problem Statement]
Write a func `countConstruct(target, wordBank)` that accepts a target string 
and an array of strings.
The func shd return the number of ways that the target can be constructed 
by concatenating elements of the `wordBank` array.
Elements of wordBank are reusable.
*/

const countConstruct = (target: string, wordBank: Array<string>): number => {
	if (target.length === 0) return 1;

	let counter = 0;

	for (const word of wordBank) {
		if (target.startsWith(word) === true) {
			const subTarget: string = target.replace(word, "");
			const result: number = countConstruct(subTarget, wordBank);
			if (result > 0) {
				counter += result;
			}
		}
	}

	return counter;
};

/*
[Time complexity]
Given 
height m = target.length
breadth n = wordBank.length
Number of total func calls same as canConstruct <=> n^m (geometric sum)
For each func call, copying m elements at worst -> m number of operations
-> O(n^m * m), exponential

[Space complexity]
Worst case max number of calls at any given point of time <=> target.length m
For each of these calls, 
1) there is a counter that stores 1 number
2) an array that stores at worst target.length m as copy
-> O(m ^ 2), 
*/

const countConstructMem = (target: string, wordBank: string[], mem: { [idx: string]: number } = {}): number => {
	if (target in mem) return mem[target];
	if (target.length === 0) return 1;

	let counter = 0;

	for (const word of wordBank) {
		if (target.startsWith(word) === true) {
			const subTarget: string = target.replace(word, "");
			const result: number = countConstructMem(subTarget, wordBank, mem);
			if (result > 0) {
				counter += result;
				mem[subTarget] = counter;
			}
		}
	}

	mem[target] = counter;
	return counter;
};

/*
[Time complexity]
Total number of func calls shrinks to n * m
For each func call, still have to copy m elements at worst -> m number of operations
-> O(n * m * m) <=> O(n * m^2), polynomial

[Space complexity]
Worst case max number of calls at any given point of time remains as target.length m
The mem object has m key-value pairs at worst ({string: number})
Comparing this term against the space required from the calls, m < m^2 asymptotically
-> remains as O(m ^ 2)
*/

module.exports = {
	countConstruct,
	countConstructMem,
};
