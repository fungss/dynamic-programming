/* 
[Problem Statement]
Write a func `fib(n)` that accepts a number n
and return the n-th number of the Fibonacci sequence.
fib(0) = 0
fib(1) = 1
*/

const fibTab = (n: number): number => {
	const table: Array<number> = Array(n+1).fill(0);
	table[1] = 1;

	for (let i = 0; i <= n; i++) {
		if (i+2 <= n) table[i+2] += table[i];
		if (i+1 <= n) table[i+1] += table[i];
	}
	return table[n];
};

/*
[Time Complexity]
Problem is encoded in a table instead of recurisve tree
Since the func iteratives over the table -> O(n)

[Space Complexity]
Holding n + 1 numer of results in mem -> O(n)
*/

module.exports = {
	fibTab
};
