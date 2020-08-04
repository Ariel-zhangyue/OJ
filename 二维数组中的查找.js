function Find(target, array) {
    const rows = array.length;
    const cols = array[0].length;

   const finder = findMap(target, array);
   return finder([0, rows], [0, cols]);
}

function useMed(s, e) {
    return Math.floor((s + e) / 2);
}

console.log(Find(5,
    [[1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15]]
))



function findMap(target, array) {
    const rows = array.length;
    const cols = array[0].length;

    return function deepFind([rowStart, rowEnd], [colStart, colEnd]) {
        if (rowStart === rowEnd && colStart === colEnd) {
            return array[rowStart][colStart] === target;
        }
        const medCords = [useMed(rowStart, rowEnd), useMed(colStart, colEnd)];
        const medNum = array[medCords[0]][medCords[1]]
        if (medNum === target) { return true; }
        else if (medNum < target) {
            return deepFind([0, medCords[0]], [0, medCords[1]]);
        } else {
            return deepFind([0, medCords[0]], [medCords[1], cols]) ||
                deepFind([medCords[0], rows], [medCords[1], cols]) ||
                deepFind([medCords[0], rows], [0, medCords[1]])
        }
    }
}