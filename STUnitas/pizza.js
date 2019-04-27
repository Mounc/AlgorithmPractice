var fs = require('fs')
// var input = fs.readFileSync('/dev/stdin').toString().split(' ')
var input = fs
  .readFileSync('./dev/stdin2')
  .toString()
  .split('\n')
  .map(item => item.trim())

var testCount = parseInt(input.shift().trim())
var data = input.map(row => row.split(' ').map(item => parseInt(item)))

loopMain: for (var item of data) {
  var s = item.shift()
  var m = item.shift()
  var l = item.shift()
  var num = item.shift()

  var countS = 0
  var countM = 0
  var countL = 0
  var sum = 0
  for (countL = 1; countL <= 50; countL += 1) {
  for (countM = 1; countM <= 50; countM += 1) {
      for (countS = 1; countS <= 50; countS += 1) {
        sum = s * countS + m * countM + l * countL
        // console.log(countS, countM, countL)
        if (sum === num) {
          console.log(1)
          continue loopMain
        }
        if (sum > num) {
          countS = 1
          sum = 0
          break
        }
      }
      sum = s * countS + m * countM + l * 1
      if (sum > num) {
        countM = 1
        sum = 0
        break
      }
    }
    sum = s * countS + m * 1 + l * 1
    if (sum > num) {
      sum = 0
      break
    }
  }
  console.log(0)
}
