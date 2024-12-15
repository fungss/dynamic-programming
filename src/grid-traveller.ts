/* Notes
From starting node, only move left or down in every move.
Since no diagonal move, distance from starting node (m,n) to target node (1,1) is a Manhattan distance.
Time complexity = number of function calls made = # of nodes in the binary tree.
The level of the tree is m + n - 2.
For each level, there are 2 function calls -> Time complexity is O(2 ^ level of tree) = O(2 ^ (m + n)).

Applying the same reasoning as in fib.ts, space complexity is O(level of tree) = O(m + n).
*/
const gridTravelerRecur = (m: number, n: number): number => {
	if (m == 0 || n == 0) return 0;
	if (m == 1 && n == 1) return 1;
	return gridTravelerRecur(m - 1, n) + gridTravelerRecur(m, n - 1);
};

/* 
Given
1. f(m,n) = f(n,m) -> symmetric nature of the problem, and
2. memoization,
the binary tree shrinks to a degenerate tree. 
Time complexity reduces from O(2 ^ (m + n)) to O(m + n).
Space complexity remains unchanged.
As a result, time required for gridTraveler(18,18) reduces from 37641 ms to 1 ms
*/
const gridTravelerMem = (
	m: number,
	n: number,
	mem: { [key: string]: number } = {}
): number => {
	const key: string = m + "," + n;
	const key_recipical: string = n + "," + m;
	if (key in mem) return mem[key];
	if (key_recipical in mem) return mem[key_recipical];
	if (m === 0 || n === 0) return 0;
	if (m === 1 && n === 1) return 1;
	const result: number =
		gridTravelerMem(m - 1, n, mem) + gridTravelerMem(m, n - 1, mem);
	mem[key] = result;
	mem[key_recipical] = result;
	return mem[key];
};

module.exports = {
	gridTravelerRecur,
	gridTravelerMem,
};
