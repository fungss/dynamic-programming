const count_construct = require("../src/count-construct-tab.ts");

// // Usage: test('description', testFunction)
test(".countConstructTab('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) === 1", () => {
	expect(count_construct.countConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"])).toBe(1);
});

test(".countConstructTab('purple', ['purp', 'p', 'ur', 'le', 'purpl']) === 2", () => {
	expect(count_construct.countConstructTab("purple", ["purp", "p", "ur", "le", "purpl"])).toBe(2);
});

test(".countConstructTab('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee']) === 0", () => {
	expect(count_construct.countConstructTab("eeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])).toBe(0);
});
