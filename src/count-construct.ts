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

const countConstructTab = (target: string, wordBank: Array<string>): number => {
	const table: Array<number> = Array(target.length+1).fill(0);
	table[0] = 1;

	for (let i = 0; i < table.length; i++) {
		if (table[i] > 0) {
			for (const word of wordBank) {
				if (i + word.length < table.length) {
					if (target.slice(i, i+word.length) === word) {
						table[i + word.length] += table[i];
					}
				}
			}
		}
	}

	return table[target.length];
};

/*
[Tabulation recipe]
1. size of table
an array of length === target, coz it's shrinkable thru iteration
2. value at init
problem asking for counts -> so number
3. trivial answer
table[0] to represent '' which returns 1
4. logic to interate thru the array
same as can-construct-tab
as i increases,
consider the NEXT word.length chars (so i + word.length), and 
check if the slice matches the word, for word in wordBank
add table[i] to table[i + word.length] (not 1 since there could be > 1 ways to achieve table[i])
return table[target.length];

[Time complexity]
same as can-construct-tab
m = target.length
n = wordBank.length
for each m and n, there is a copy of at worst n elements for comparison
so -> O(m * n * m) <-> O(m^2 * n)

[Space complexity]
same as can-construct-tab
array of m+1 ~ m length
so -> O(m)
(sliced copy is only a local varialbe and does not accumulate over time)
*/

module.exports = {
	countConstruct,
	countConstructMem,
	countConstructTab,
};
