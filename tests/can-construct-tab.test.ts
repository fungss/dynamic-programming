const can_construct = require("../src/can-construct-tab.ts");

// // Usage: test('description', testFunction)
test("canConstructTab('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) === true", () => {
	expect(can_construct.canConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"])).toBe(true);
});

test("canConstructTab('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']) === true", () => {
	expect(can_construct.canConstructTab("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])).toBe(true);
});

test("canConstructTab('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee']) === false", () => {
	expect(can_construct.canConstructTab("eeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])).toBe(false);
});
 