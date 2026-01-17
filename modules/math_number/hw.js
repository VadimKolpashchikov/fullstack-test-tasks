const diceMap = {
  d4: [1, 4],
  d6: [1, 6],
  d8: [1, 8],
  d10: [1, 10],
  d12: [1, 12],
  d16: [1, 16],
  d20: [1, 20],
};

export function throwDice(diceType = 'd6') {
  const diceKey = diceType.toLowerCase();

  if (!diceMap[diceKey]) {
    throw new Error('Invalid dice type');
  }

  const [min, max] = diceMap[diceKey];

  return Math.floor(Math.random() * (max - min + 1) + min);
}
