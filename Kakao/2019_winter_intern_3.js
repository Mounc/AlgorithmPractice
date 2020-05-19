function solution(userIds, bannedIds = []) {
  const caseByBannedIdIndex = {};
  for (let i = 0; i < bannedIds.length; i++) {
    const regex = new RegExp(
      "^" + bannedIds[i].replace(/\*/g, "[a-z0-9]{1}") + "$",
    );
    const matches = userIds.reduce((count, id, i) => {
      const test = regex.test(id);
      if (test) userIds[i] = undefined;
      return count + (test ? 1 : 0);
    }, 0);

    if (!caseByBannedIdIndex[i]) caseByBannedIdIndex[i] = 0;
    caseByBannedIdIndex[i] += matches;
  }
  console.log(caseByBannedIdIndex);
}

console.log(
  solution(
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["fr*d*", "abc1**"],
  ),
  "is expected",
  2,
);
console.log(
  solution(
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["*rodo", "*rodo", "******"],
  ),
  "is expected",
  2,
);
console.log(
  solution(
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["fr*d*", "*rodo", "******", "******"],
  ),
  "is expected",
  3,
);
