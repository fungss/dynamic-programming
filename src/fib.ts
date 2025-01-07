const fibRecur = (n: number): number => {
	if (n < 0) throw new Error("Input must be positive number.");
	if (n == 0) return 0;
	if (n <= 2) return 1;
	return fibRecur(n - 1) + fibRecur(n - 2);
};

/*
[Time Complexity]
Assume uniform execution of time for the function calls,
2 function calls are made and there are n-1 levels for each level of operation, 
so time complexity, measuring how execution time of algo grows as function of input size, is O(2^n)

Proof - lower bound dib and upper bound lib both have O(2^n) so fib also
// O(dib) <= O(fib) <= O(lib) -> O(fib) = O(2^n)

[Space Complexity]
A frame is added to the stack when a function call is involved, and 
it's only the last function call that reaches the base case would return and be removed from the stack
So there are only at most n = number levels of function calls anytime when the main function is called
Therefore the space complexity is O(n)
*/

const fibMem = (n: number, mem: { [idx: number]: number } = {}): number => {
	if (n < 0) throw new Error("Input must be positive number.");
	if (n in mem) return mem[n];
	if (n == 0) return 0;
	if (n <= 2) return 1;
	mem[n] = fibMem(n - 1, mem) + fibMem(n - 2, mem);
	return mem[n];
};

/*
[Time Complexity]
Adding memoization, by introducing a shared variable mem that caches the intermediate results,
the operation for each level is reduced from 2 function calls to 1 function call + 1 lookup (with hashmap = O(1))
Therefore, the space and time complexity is reduced from O(2^n) to O(n)
*/

module.exports = {
	fibRecur,
	fibMem,
};
