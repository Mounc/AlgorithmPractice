function solution(input) {
  let result = []
  let str = []
  for (const s of input.split('')) {
    if (str.indexOf(s) === -1) {
      str.push(s)
      if (str.length > result.length) result = str
    } else {
      str = [s]
    }
  }
  return result
}

const res = solution('aabcbcbc')
const res2 = solution('abcaabcdaaacdegfpa')
const res3 = solution('aabcabacdgsbdsretsef')

console.log()
console.log(res)
console.log(res2)
console.log(res3)
