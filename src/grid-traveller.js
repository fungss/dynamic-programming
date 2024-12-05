const gridTraveler = (m, n, mem={}) => {
    const ket = m + ',' + n;
    if (key in mem) return memo[key];
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;
    mem[key] = gridTraveler(m-1, n, mem) + gridTraveler(m, n-1, mem)
    return mem[key];
}

module.exports = {
    gridTraveler
}