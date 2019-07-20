function solution(input) {
  const result = []
  for (const a in input) {
    if (input[a] === 0) result.push(input.splice(a, 1))
  }
  return input.concat(...result)
}

const res = solution([0, 5, 0, 3, -1])
const res2 = solution([3, 0, 3])

console.log()
console.log(res)
console.log(res2)
