function f(input) {
  input.sort((a, b) => a[0] > b[0]);
  let result = [input.shift()];

  while (input.length) {
    let first = result.pop();
    let second = input.shift();
    first[1] >= second[0]
      ? result.push([first[0], Math.max(first[1], second[1])])
      : result.push(first, second);
  }

  return result;
}

console.log(f([[2, 4], [1, 5], [7, 9]]));
console.log(f([[3, 6], [1, 3], [2, 4]]));
console.log(f([[1, 2], [1, 3], [2, 4]]));
