// fib memoization

// time complexity
// O(dib) <= O(fib) <= O(lib) => O(fib) = O(2^n)
// space complexity = num of stack frame
// similarly, O(n)
const fibRecur = (n) => {
    if (n <= 2) return 1;
    return fibRecur(n-1)+fibRecur(n-2);
};

// memoization - store for results of duplicate subproblem
// -> hashmap
// time complexity and space complexity -> O(n)
const fibMem = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibMem(n-1, memo) + fibMem(n-2, memo);
    return memo[n];
}

module.exports = {
    fibRecur,
    fibMem
};