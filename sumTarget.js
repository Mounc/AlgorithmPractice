/*
정수 배열과 타겟 숫자가 주어지면,
합이 타겟값이 되는 두 원소의 인덱스를 찾으시오.

단, 시간복잡도 O(n) 여야 합니다.

예제)

Input: [2, 5, 6, 1, 10], 타겟 8

Output: [0, 2] // 배열[0] + 배열[2] = 8

*/

function f(input, target) {
  // HashMap (대신 object)을 이용하여 찾는다.
  const map = {}
  for (let i = 0; i < input.length; i += 1) {
    const num = target - input[i]
    if (map[num]) return [map[num], i]
    map[input[i]] = i
  }

  return 0
}

console.log(f([2, 5, 6, 22, 1, 10], 32))
