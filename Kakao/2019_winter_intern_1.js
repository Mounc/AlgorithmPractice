function solution(board, moves) {
  if (!moves.length || moves.length > 1000) return 0;
  if (board.length < 5 || board.length > 30) return 0;

  let count = 0;
  const basket = [];
  for (let i = 0; i < moves.length; i += 1) {
    const location = moves[i] - 1;
    const row = board.find((row) => row[location]);
    if (row) {
      const target = row[location];
      row[location] = 0;
      basket.push(target);

      if (basket[basket.length - 1] === basket[basket.length - 2]) {
        count += 2;
        basket.pop();
        basket.pop();
      }
    }
  }

  return count;
}

const result = solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4],
);
console.log(result, "is 4 ?");
