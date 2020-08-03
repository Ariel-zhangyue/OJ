function hasPath(matrix, rows, cols, path) {
  // write code here
  // const mx = formatMatrix(matrix, rows, cols);

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (ifHaspathFrom(formatMatrix(matrix, rows, cols), i, j, path)) return true;
    }
  }
  return false;
}

function ifHaspathFrom(matrix, r, c, path) {
  if (path === '') return true;
  if (r < 0 || c < 0 || r >= matrix.length || c >= matrix[0].length) {
    return false;
  }
  if (!matrix[r][c].visited && matrix[r][c].val === path[0]) {
    matrix[r][c].visited = true;
    return (ifHaspathFrom(matrix, r, c - 1, path.slice(1)) ||
      ifHaspathFrom(matrix, r, c + 1, path.slice(1)) ||
      ifHaspathFrom(matrix, r - 1, c, path.slice(1)) ||
      ifHaspathFrom(matrix, r + 1, c, path.slice(1)));
  }
  return false;
}

function formatMatrix(string, rows, cols) {
  const res = [];
  let i = 0;
  while (i < rows) {
    res[i] = string.substring(i * cols, i * cols + cols).split('').map(num => ({ val: num, visited: false }));
    i += 1;
  }
  return res;
}


// console.log(hasPath("ABCESFCSADEE", 3, 4, "ABCCED"));
console.log(hasPath("A", 1, 1, "A"));
