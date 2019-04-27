function getNanoSecTime() {
  const hrTime = process.hrtime()
  return hrTime[0] * 1000000000 + hrTime[1]
}
const fs = require('fs')

// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// let FiboNumberRecursive = []
// let FiboNumberLoop = [0, 1]

// function getFiboRecursive(n) {
//   if (FiboNumberRecursive[n]) return FiboNumberRecursive[n]
//   if (n < 2) FiboNumberRecursive[n] = n
//   else FiboNumberRecursive[n] = getFiboRecursive(n - 2) + getFiboRecursive(n - 1)
//   return FiboNumberRecursive[n]
// }

// let sum = 0
// function getFiboLoop(n) {
//   for (let i = 2; i <= n; i += 1) {
//     FiboNumberLoop[i] = FiboNumberLoop[i - 1] + FiboNumberLoop[i - 2]
//     if (FiboNumberLoop[i] % 2 === 0) sum += FiboNumberLoop[i]
//     if (FiboNumberLoop[i] + FiboNumberLoop[i - 1] > n) break
//   }
//   return FiboNumberLoop
// }

// function run(x) {
//   const start = getNanoSecTime()
//   // const num = getFiboRecursive(x)
//   const num = getFiboLoop(x)
//   const end = getNanoSecTime()
//   const time = end - start

//   console.log(num, sum)
// }

// run(11)

