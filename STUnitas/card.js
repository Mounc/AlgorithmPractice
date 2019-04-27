var fs = require('fs')
// var input = fs.readFileSync('/dev/stdin').toString().split(' ')
var input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .split('\n')
  .map(item => item.trim())

input = input.map(row => row.split(' ').map(item => parseInt(item)))

// 딸기, 바나나, 라임, 자두
var num = input.shift()

for (var i = 0; i < num * 2; i += 2) {
  // i번째 게임의 두 선수의 카드
  var man = new Array(2)
  man[0] = input.shift()
  man[1] = input.shift()
  var manCard = new Array(2)
  manCard[0] = man[0].shift()
  manCard[1] = man[1].shift()

  // 두 선수의 각 과일 카드 갯수를 담는 배열
  var card = new Array(man.length)
  card[0] = new Array(4)
  card[1] = new Array(4)

  // 카드의 갯수 배열을 0으로 초기화
  for (var a = 0; a < card.length; a += 1) {
    for (var b = 0; b < card[a].length; b += 1) {
      card[a][b] = 0
    }
  }

  for (var j = 0; j < man.length; j += 1) {
    for (var k = 0; k < manCard[j]; k += 1) {
      card[j][man[j][k] - 1] += 1
    }
  }

  var win = ''
  for (var x = 3; x >= 0; x -= 1) {
    if (card[0][x] > card[1][x]) {
      win = 'A'
      break
    } else if (card[0][x] < card[1][x]) {
      win = 'B'
      break
    }
  }
  if (!win) win = 'D'
  console.log(win)
}
