function duplicateLetters(letters) {
  if (typeof letters !== 'string') {
    return 'Not a string';
  }

  let countArray = {};
  for (const char in letters) {
    if (typeof countArray[letters[char]] === 'undefined') {
      countArray[letters[char]] = 1;
    } else {
      countArray[letters[char]] += 1;
    }
  }

  countArray = Object.values(countArray);
  countArray.sort((a, b) => b - a);
  return (countArray[0] <= 1) ? false : countArray[0];
}

// console.log(duplicateLetters('asyfghjklqyerftyuiop'))

export default {
  duplicateLetters,
};
