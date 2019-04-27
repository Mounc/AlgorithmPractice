// 시간 구하는 함수
function getNanoSecTime() {
  var hrTime = process.hrtime()
  return hrTime[0] * 1000000000 + hrTime[1]
}

function getProcessTime(f) {
  const start = getNanoSecTime()
  console.log(f())
  const end = getNanoSecTime()
  console.log(f.name, end - start)
}

// 피보나치 수열 n번째 항 값 구하기
// 1. 재귀함수를 사용하기
var count = 0
const fibonacciRecursive = n => {
  if (n == 1 || n == 0) {
    count++
    return n
  }
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1)
}
// 2. 변수 사용하기
const fibonacciLoop = n => {
  let a = 0,
    b = 1,
    c

  for (let i = 0; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }
  return c
}

// getProcessTime(() => fibonacciRecursive(5))

function fibonacciRecursive10k() {
  let n = 42
  return fibonacciRecursive(n)
}
getProcessTime(fibonacciRecursive10k)
console.log(count)

const sumFibonacciLoop = x => {
  let result = 0
  for (let i = 0; i <= x; i++) result += fibonacciRecursive(i)
  return result
}

const sumFibonacci = x => {
  return fibonacciRecursive(x + 2) - 1
}
