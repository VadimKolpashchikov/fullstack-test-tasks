'use strict';

const data = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
];

function unique(arr) {
  let result = [];

  if (Array.isArray(arr)) {
    const uniqueIdsSet = new Set(arr.map(({ id }) => id));

    uniqueIdsSet.forEach((id) => {
      result.push(arr.find((el) => el.id === id));
    });
  }

  return result;
}

console.log(unique(data));
