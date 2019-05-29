/*
  프로그래머스 두 정수 사이의 합
  https://programmers.co.kr/learn/courses/30/lessons/12912
*/

function solution(a, b) {
  if (a > b) {
    const temp = a
    a = b
    b = temp
  }
  let temp = a + 1
  while (temp <= b) a += temp++

  return a
}

console.log(solution(3, 5))
console.log(solution(3, 3))
console.log(solution(5, 3))
