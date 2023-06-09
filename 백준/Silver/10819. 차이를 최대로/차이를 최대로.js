const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const visited = new Array(n).fill(false);
const result = [];
let max = -Infinity;

function dfs(depth) {
  if (depth === n) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
      sum += Math.abs(result[i] - result[i + 1]);
    }
    max = Math.max(max, sum);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(arr[i]);
    dfs(depth + 1);
    visited[i] = false;
    result.pop();
  }
}

dfs(0);
console.log(max);
