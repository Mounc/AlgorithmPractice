function solution(array, commands) {
  let answer = []

  for (const item of commands) {
    answer.push(
      array.slice(item[0] - 1, item[1]).sort((a, b) => a - b)[item[2] - 1]
    )
  }

  return answer
}

const result = solution(
  [1, 5, 2, 6, 3, 7, 4],
  [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
)
console.log(result)
