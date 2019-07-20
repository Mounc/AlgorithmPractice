function solution(input) {
  return input.map(n => {
    return input.reduce((a, b) => {
      if (n === b) return a * 1
      return a * b
    }, 1)
  })
}

// TODO 시간복잡도 O(n)으로 다시 풀기

const res = solution([1, 2, 3, 4, 5])

console.log()
console.log(res)
