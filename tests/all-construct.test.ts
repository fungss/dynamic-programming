const all_construct = require("../src/all-construct.ts");

// Usage: test('description', testFunction)
test("allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])", () => {
	const expectedArray: Array<Array<string>> = [
		['ab', 'cd', 'ef'],
		['ab', 'c', 'def'],
		['abc', 'def'],
		['abcd', 'ef']
	];
	expect(all_construct.allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])).toEqual(expectedArray);
});

test("allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])", () => {
	const expectedArray: Array<Array<string>> = [
		['purp', 'le'],
		['p', 'ur', 'p', 'le']
	];
	expect(all_construct.allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])).toEqual(expectedArray);
});

test("allConstruct('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee'])", () => {
	const expectedArray: Array<Array<string>> = [];
	expect(all_construct.allConstruct("eeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])).toEqual(expectedArray);
});

test("allConstructMem('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee'])", () => {
	const expectedArray: Array<Array<string>> = [];
	expect(all_construct.allConstructMem("eeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])).toEqual(expectedArray);
});
