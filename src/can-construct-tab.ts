/* 
[Problem Statement]
Write a func `canConstruct(target, wordBank)` that accepts a target string and an array of strings.
The func shd return a boolean indicating whether or not the target can be constructed 
by concatenating elements of the workbank array.
Elements of wordBank are reusable.
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

canConstructTab("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])

module.exports = {
	canConstructTab
};
