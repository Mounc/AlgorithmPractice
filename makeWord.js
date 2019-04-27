/* 
문자 조합하기
문자배열이 주어지면, 주어진 문자로 만들수 있는 모든 문자배열 조합을 프린트 하시오.
*/

function f3(arr, c) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    for (let j = 0; j < item.length + 1; j++) {
      let temp = item.split('')
      temp.splice(j, 0, c)
      result.push(temp.join(''))
    }
  }
  return result
}

function f2(input) {
  input = input.split('')
  let arr = [input[0]]
  for (let i = 1; i < input.length; i++) {
    arr = f3(arr, input[i])
  }
  return arr
}

function solution(input) {
  return f2(input)
}
console.log(solution('ABC'))
module.exports = solution
