/*
프로그래머스 완주하지 못한 선수
https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
 */

function solution(participant, completion) {
  participant.sort()
  completion.sort()

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i]
  }
}

console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
)

console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
)
