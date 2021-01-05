function duplicateLetters(...args) {
  if (typeof args[0] !== 'string' || args.length > 1) {
    return 'Not a string';
  }
  const str = args[0];
  let countArray = {};
  for (const char in Object.values(str)) {
    if (typeof countArray[str[char]] === 'undefined') {
      countArray[str[char]] = 1;
    } else {
      countArray[str[char]] += countArray[str[char]];
    }
  }
  countArray = Object.values(countArray);
  countArray.sort((a, b) => b - a);
  return (countArray[0] <= 1) ? false : countArray[0];
}

export default {
  duplicateLetters,
};
