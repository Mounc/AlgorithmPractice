/*
정수(int)가 주어지면, 팰린드롬(palindrome)인지 알아내시오. 
팰린드롬이란, 앞에서부터 읽으나 뒤에서부터 읽으나 같은 단어를 말합니다.
단, 정수를 문자열로 바꾸면 안됩니다.

Given an integer, check if it is a palindrome.

예제)
Input: 12345
Output: False

Input: -101
Output: False

Input: 11111
Output: True

Input: 12421
Output: True
*/

function isPalindrome(input) {
  if (!input || input < 0) return false
  if (input !== 0 && input % 10 === 0) false
  let rev = 0
  let num = input

  while (num) {
    rev = (num % 10) + rev * 10
    num = Math.floor(num / 10)
  }

  return input === rev
}

console.log(12345, isPalindrome(12345))
console.log()
console.log(-101, isPalindrome(-101))
console.log()
console.log(11111, isPalindrome(11111))
console.log()
console.log(12421, isPalindrome(12421))
