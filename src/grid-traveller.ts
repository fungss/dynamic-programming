const gridTravelerRecur = (m: number, n: number): number => {
	if (m == 0 || n == 0) return 0;
	if (m == 1 && n == 1) return 1;
	return gridTravelerRecur(m - 1, n) + gridTravelerRecur(m, n - 1);
};

/* 
[Time Complexity]
From starting node, only move left or down in every move.
Since no diagonal move, distance from starting node (m,n) to target node (1,1), is of Manhattan distance.
Time complexity = number of function calls made = # of nodes in the binary tree.
The level of the tree is m + n - 2.
For each level, there are 2 function calls -> Time complexity is O(2 ^ level of tree) = O(2 ^ (m + n)).

[Space Complexity]
Applying the same reasoning as in fib.ts, space complexity is O(level of tree) = O(m + n)
*/

const gridTravelerMem = (m: number, n: number, mem: { [key: string]: number } = {}): number => {
	const key: string = m + "," + n;
	const key_recipical: string = n + "," + m;
	if (key in mem) return mem[key];
	if (key_recipical in mem) return mem[key_recipical];
	if (m === 0 || n === 0) return 0;
	if (m === 1 && n === 1) return 1;
	const result: number = gridTravelerMem(m - 1, n, mem) + gridTravelerMem(m, n - 1, mem);
	mem[key] = result;
	mem[key_recipical] = result;
	return mem[key];
};

/*
[Time Complexity]
Given
1. f(m,n) = f(n,m) -> symmetric nature of the problem, and
2. memoization,
the binary tree shrinks to a degenerate tree
Time complexity reduces from O(2 ^ (m + n)) to O(m + n)

[Space Complexity]
remains unchanged

As a result, time required for gridTraveler(18,18) reduces from 37641 ms to 1 ms
*/

const gridTravelerTab = (m: number, n: number): number => {
	// initialize table
	const table: Array<Array<number>> = Array.from(Array(m+1), () => Array(n+1).fill(0));
	table[1][1] = 1;

	// loop over the m * n entries
	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			if (i + 1 <= m) table[i + 1][j] += table[i][j];
			if (j + 1 <= n) table[i][j + 1] += table[i][j];
		}
	}

	return table[m][n];
};

/* 
[Time Complexity]
table size is ~ m * n
Since the func iteratives over the table -> O(m * n), linear

[Space Complexity]
Holding n + 1 numer of results in mem -> O(n)
*/

module.exports = {
	gridTravelerRecur,
	gridTravelerMem,
	gridTravelerTab,
};

/*
Side notes
1. table size represents the size of the problem
2. Array(m+1).fill(Array(n+1).fill(0)) would not work to create the desired 2d-array
It will create a 2d-array with 3 index that points to the same Array(n+1).fill(0) (Shared References)

Tabulation recipe
1. visualize the problem as a table
2. size the table based on the inputs
3. initalize the table with default values (True/False or number, depending on the problem)
4. seed the trivial answer into the table
5. iterate thru the table and figure out logic to fill further positions based on curr position
*/