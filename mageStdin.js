var fs = require('fs')

// var input = fs.readFileSync('/dev/stdin').toString().split(' ')

// fs모듈로 파일을 불러옴
var input = fs.readFileSync('./dev/stdin').toString()
  // 줄 단위로 끊어서 배열화
  .split('\n')
  // 줄 끝에 있는 문자를 삭제 (\n, \r 등)
  .map(item => item.trim())

// input의 첫번째에 있는 n, m을 가져옴
var nm = input.shift()
  // 문자열을 배열로 나눔
  .split(' ')
  // 문자를 숫자로 변경
  .map(item => parseInt(item))

// input에 있는 미로를 가져옴,
// 줄 단위로 배열에 저장
// 한 줄의 값을 배열로 나눔 (101111 => [1,0,1,1,1,1])
// 문자를 숫자로 변경
var mage = input.map(item => item.split('').map(num => parseInt(num)))

console.log(nm)
console.log(mage)


