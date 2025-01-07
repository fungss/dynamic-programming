const can_construct = require("../src/can-construct.ts");

// // Usage: test('description', testFunction)
test("canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) === true", () => {
	expect(can_construct.canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])).toBe(true);
});

test("canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']) === true", () => {
	expect(can_construct.canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])).toBe(true);
});

test("canConstruct('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee']) === false", () => {
	expect(can_construct.canConstruct("eeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])).toBe(false);
});

test("canConstructMem('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee']) === false", () => {
	expect(can_construct.canConstructMem("eeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])).toBe(false);
});
