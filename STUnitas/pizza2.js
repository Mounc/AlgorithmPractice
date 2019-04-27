var fs = require('fs')
// var input = fs.readFileSync('/dev/stdin').toString().split(' ')
var input = fs
  .readFileSync('./dev/stdin2')
  .toString()
  .split('\n')
  .map(item => item.trim())
input.shift()
var data = input.map(row => row.split(' ').map(item => parseInt(item)))

loopMain: for (var item of data) {
  var s = item.shift()
  var m = item.shift()
  var l = item.shift()
  var num = item.shift()

  var countS = 1
  var countM = 1
  var countL = 1
  var sum = 0

  num = num - getSum()
  if (num === 0) {
    console.log(1)
    continue
  }
  var countS = 0
  var countM = 0
  var countL = 0

  for (; ; countL += 1) {
    for (; ; countM += 1) {
      for (; ; countS += 1) {
        sum = getSum()
        if (sum === num) {
          console.log(countS, countM, countL)
          console.log(1)
          continue loopMain
        }
        if (sum > num) {
          countS = 0
          break
        }
      }
      sum = getSum()
      if (sum > num) {
        countM = 0
        break
      }
    }
    sum = getSum()
    if (sum > num) {
      break
    }
  }
  console.log(0)

  function getSum() {
    return s * countS + m * countM + l * countL
  }
  // console.log(s, m, l, num)
}
