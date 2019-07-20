function solution(input1, input2) {
  if (input1.length !== input2.length) return false

  input1 = mapper(input1)
  input2 = mapper(input2)
  return input1 === input2
}

function mapper(input) {
  const temp = []
  return input
    .split('')
    .map(s => {
      if (!temp.includes(s)) temp.push(s)
      return temp.indexOf(s)
    })
    .join('')
}

const res = solution('EGG', 'FOO')
const res2 = solution('ABBCD', 'APPLE')
const res3 = solution('AAB', 'FOO')

console.log()
console.log(res)
console.log(res2)
console.log(res3)
