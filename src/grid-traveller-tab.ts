const gridTravelerTab = (m: number, n: number): number => {
	// initialize table
	const num_row = m + 1;
	const num_col = n + 1;
	const table: Array<Array<number>> = Array.from(Array(num_row), () => Array(num_col).fill(0));
	table[1][1] = 1;

	// loop over the m * n entries
	for (let i = 0; i < num_row; i++) {
		for (let j = 0; j < num_col; j++) {
			if (i + 1 <= num_row) table[i + 1][j] += table[i][j];
			if (j + 1 <= num_col) table[i][j + 1] += table[i][j];
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
	gridTravelerTab,
};

/*
table[i+1][j] += table[i][j];
create an array that is roughly the size of the problem
*/

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
