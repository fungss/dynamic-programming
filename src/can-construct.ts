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
		if (target.startsWith(word) === true) {
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
height m = target.length
breadth n = wordBank.length 
Considering the worst case, for each func call, there are n number of edges
So total number of calls = (n^(m+1) - 1)/n-1 (geometric sum) ~ n^m (ignoring constant term, exponential)
For each call there are two operations,
1) target.includes(word) - O(n), linearly search thru target
2) target.replace(word, "") - O(n), copying m, at worst, elements 1 by 1 to a new array <=> also linear
-> 2n ~ n (ignoring constant term)
As a result, time complexity is O(n^m * m)

[Space complexity]
At any point of time during the execution, there are at most m number of calls
And for each call, there will be an array storing m elements at worst
So space complexity is O(m ^ 2)
*/

const canConstructMem = (target: string, wordBank: string[], mem: { [idx: string]: boolean } = {}): boolean => {
	if (target in mem) return mem[target];
	if (target.length === 0) return true;

	for (const word of wordBank) {
		if (target.startsWith(word) === true) {
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
The mem object has m key-value pairs at worst ({string: boolean})
Comparing this term against the space required from the calls, m < m^2 asymptotically
So space complexity remains as O(m ^ 2)
*/

const canConstructTab = (target: string, wordBank: Array<string>): boolean => {
	const table: Array<boolean> = Array(target.length+1).fill(false);
	table[0] = true;

	for (let i = 0; i < table.length; i++) {
		if (table[i] === true) {
			for (const word of wordBank) {
				if (i + word.length < table.length) {
					if (target.slice(i, i+word.length) === word) {
						table[i + word.length] = true;
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
problem asking for boolean -> so true/false
3. trivial answer
table[0] to represent '' which returns true
4. logic to interate thru the array
as i increases, 
consider the NEXT word.length chars (so i + word.length), and 
check if the slice matches the word, for word in wordBank
return table[target.length];

[Time complexity]
m = target.length
n = wordBank.length
for each m and n, there is a copy of at worst n elements for comparison
so -> O(m * n * m) <-> O(m^2 * n)

[Space complexity]
array of m+1 ~ m length
so -> O(m)
(sliced copy is only a local varialbe and does not accumulate over time)
*/

module.exports = {
	canConstruct,
	canConstructMem,
	canConstructTab,
};
