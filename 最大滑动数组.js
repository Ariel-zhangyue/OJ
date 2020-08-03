function maxInWindows(num, size) {
  // write code here
  const length = num.length;
  const res = [];
  for (let i = 0; i <= length - size; i++) {
    res[i] = findMax(num.slice(i, i + size))
  }
  return res;
}

function findMax(arr) {
  return Math.max(...arr);
}

console.log(maxInWindows([2, 3, 4, 2, 6, 2, 5, 1], 3));

// expect: [4, 4, 6, 6, 5];