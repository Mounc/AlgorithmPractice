/*
https://programmers.co.kr/learn/courses/30/lessons/42746

문제 설명
0 또는 양의 정수가 주어졌을 때,
정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면
[6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고,
이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때,
순서를 재배치하여 만들 수 있는 가장 큰 수를
문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

입출력 예
numbers               return
[6, 10, 2]               "6210"
[3, 30, 34, 5, 9]    "9534330"

*/

function solution(input) {
  for (let i = 0; i < input.length - 1; i += 1) {
    for (let j = i; j < input.length; j += 1) {
      if (i === j) continue
      if (compare(input[i], input[j])) swap(input, i, j)
    }
  }
  return parseInt(input.join('')) === 0 ? '0' : input.join('')
}
function compare(a, b) {
  if (a < 10 && b < 10) {
    if (a < b) return true
    else return false
  } else {
    a = (a + '').split('').map(item => parseInt(item))
    b = (b + '').split('').map(item => parseInt(item))

    for (let i = 0; i < Math.max(a.length, b.length); i += 1) {
      if (a[i] === b[i]) continue

      if (a[i] === undefined) {
        return compare(a[i - 1], b[i])
      } else if (b[i] === undefined) {
        return compare(a[i], b[i - 1])
      }

      if (compare(a[i], b[i])) return true
    }
  }
  return false
}

function swap(input, i, j) {
  let temp = input[i]
  input[i] = input[j]
  input[j] = temp
}

console.log(solution([6, 10, 2]))
console.log(solution([3, 30, 34, 5, 9]))
console.log(solution([121, 12]))
console.log(solution([21, 212]))
console.log(solution([0, 1000, 0, 0]))
console.log(solution([0, 0, 0, 0]))
//오류
