
var fs = require('fs')
var input = fs.readFileSync('/dev/stdin').toString().split('\n').map(item => item.trim()).map(item=>parseInt(item))
// var input = fs.readFileSync('./dev/stdin').toString().split('\n').map(item => item.trim())
console.log(input[0] + input[1])
