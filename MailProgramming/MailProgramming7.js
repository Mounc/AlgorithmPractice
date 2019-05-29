function reverse(str) {
  let reversed = ''
  for (let char of str) {
    reversed = char + reversed
  }
  return reversed
}

function f(input) {
  return input
    .split(' ')
    .map(word => reverse(word))
    .join(' ')
}

console.log(f('abc 123 apple'))
