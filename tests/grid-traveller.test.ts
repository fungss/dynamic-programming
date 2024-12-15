const grid = require("../src/grid-traveller.ts");

// Usage: test('description', testFunction)
test("gridTravelerRecur(2,3) == 3", () => {
	expect(grid.gridTravelerRecur(2, 3)).toBe(3);
});

test("gridTravelerRecur(3,3) == 6", () => {
	expect(grid.gridTravelerRecur(3, 3)).toBe(6);
});

test("gridTravelerRecur(18,18) == 2333606220", () => {
	expect(grid.gridTravelerRecur(18, 18)).toBe(2333606220);
});

test("gridTravelerMem(2,3) == 3", () => {
	expect(grid.gridTravelerMem(2, 3)).toBe(3);
});

test("gridTravelerMem(3,3) == 6", () => {
	expect(grid.gridTravelerMem(3, 3)).toBe(6);
});

test("gridTravelerMem(18,18) == 2333606220", () => {
	expect(grid.gridTravelerMem(18, 18)).toBe(2333606220);
});

test("gridTravelerMem(25,25) == 32247603683100", () => {
	expect(grid.gridTravelerMem(25, 25)).toBe(32247603683100);
});
