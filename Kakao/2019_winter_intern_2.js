function solution(s) {
  return s
    .substr(1)
    .substr(0, s.length - 1)
    .split("},{")
    .map((s) => s.replace(/[^0-9\,]/g, ""))
    .map((s) => s.split(",").map(Number))
    .sort((prev, next) => prev.length - next.length)
    .reduce((res, arr) => {
      arr.forEach((num) => !res.includes(num) && res.push(num));
      return res;
    }, []);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"), "is", [2, 1, 3, 4]);
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"), "is", [2, 1, 3, 4]);
console.log(solution("{{20,111},{111}}"), "is", [111, 20]);
console.log(solution("{{123}}"), "is", [123]);
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"), "is", [3, 2, 4, 1]);
