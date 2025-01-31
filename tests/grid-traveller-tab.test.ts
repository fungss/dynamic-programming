const grid = require("../src/grid-traveller-tab.ts");

// Usage: test('description', testFunction)
test("gridTravelerTab(2,3) == 3", () => {
	expect(grid.gridTravelerTab(2, 3)).toBe(3);
});

test("gridTravelerTab(3,3) == 6", () => {
	expect(grid.gridTravelerTab(3, 3)).toBe(6);
});

test("gridTravelerTab(18,18) == 2333606220", () => {
	expect(grid.gridTravelerTab(18, 18)).toBe(2333606220);
});

test("gridTravelerTab(25,25) == 32247603683100", () => {
	expect(grid.gridTravelerTab(25, 25)).toBe(32247603683100);
});
