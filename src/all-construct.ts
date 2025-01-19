/* 
[Problem Statement]
Write a func `allConstruct(target, wordBank)` that accepts a target string 
and an array of strings.
The func shd return a 2D array that includes
all combinations such that the target can be constructed 
by concatenating elements of the `wordBank` array.
Elements of wordBank are reusable.
*/

const allConstruct = (target: string, wordBank: Array<string>): Array<Array<string>> => {
	if (target.length === 0) return [[]];

    let result: Array<Array<string>> = [];

	for (const word of wordBank) {
		if (target.startsWith(word) === true) {
			const subTarget: string = target.replace(word, "");
			const subResult: Array<Array<string>> = allConstruct(subTarget, wordBank);
			if (subResult.length > 0) {
                for (const combination of subResult) {
                    if (combination.length > 0) {
                        result.push([word, ...combination])
                    } else {
                        result.push([word])
                    }
                }
			}
		}
	}

	return result;
};

/*
[Time complexity]
Given 
height m = target.length
breadth n = wordBank.length
total number of func calls <=> (n^(m+1) - 1) / (n-1)
for each call, worst case copying an array of size n for m times
-> (n^(m+1) - 1) * (n * m) / (n-1)
ignoring constant factor,
-> time complexity <=> O(n^m * m) <=> O(n^m), exponential

[Space complexity]
Worst case max number of calls at any given point of time <=> target.length m
For each of these calls, 
TODO: TBC

*/

const allConstructMem = (target: string, wordBank: Array<string>, mem: {[idx: string]: Array<Array<string>>} = {}): Array<Array<string>> => {
	if (target in mem) return mem[target];
	if (target.length === 0) return [[]];

    let result: Array<Array<string>> = [];

	for (const word of wordBank) {
		if (target.startsWith(word) === true) {
			const subTarget: string = target.replace(word, "");
			const subResult: Array<Array<string>> = allConstructMem(subTarget, wordBank, mem);
			if (subResult.length > 0) {
                for (const combination of subResult) {
                    if (combination.length > 0) {
                        result.push([word, ...combination])
                    } else {
                        result.push([word])
                    }
                }
			}
		}
	}

	mem[target] = result;
	return mem[target];
};

/*
[Time complexity]
TODO: TBC

[Space complexity]
TODO: TBC

*/

module.exports = {
	allConstruct,
	allConstructMem,
};

/*
[Note]
1. can (decision problem) -> how (combinatoric problem) -> best (optimisation problem)
2. true worst case is not allConstructMem('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee']) but
allConstructMem('eeeeeeeeeeeeeeeeeeeeee', ['e', 'ee', 'eee', 'eeee', 'eeeee'])
*/