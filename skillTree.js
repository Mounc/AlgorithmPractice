function solution(skill, skill_trees) {
  let answer = 0

  skill = skill.split('').reverse()
  skill_trees = skill_trees.map(item => item.split(''))
  skill_trees = skill_trees.map(item => item.reverse())

  for (const item of skill_trees) {
    let temp = []
    for (let i = 0; i < skill.length; i++) {
      let x = item.indexOf(skill[i])
      temp.push(x)
    }
    // const first = new Array(...temp)
    // const second = new Array(...temp.sort((a, b) => a - b))
    // if (JSON.stringify(first) == JSON.stringify(second)) {
    //   answer += 1
    // }
    loop: for (let i = 0; i < temp.length - 1; i += 1) {
      for (let j = i + 1; j < temp.length; j += 1) {
        if (temp[i] > temp[j]) {
          answer += 1
          break loop
        }
      }
    }
  }

  return skill_trees.length - answer
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']))
