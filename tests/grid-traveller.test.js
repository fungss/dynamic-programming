const grid = require("../src/grid-traveller")

// Usage: test('description', testFunction)
test('gridTraveler(3,3)', () => {
    expect(grid.gridTraveler(3,3)).toBe(6);
});