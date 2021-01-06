const alphabeticShift = input => {
  if (input && input.length) {
    let shiftedString = '';
    for (const char of input) {
      if (char === 'z' || char === 'Z') {
        shiftedString += String.fromCharCode((char.charCodeAt() + 1) - 26);
      } else {
        shiftedString += String.fromCharCode(char.charCodeAt() + 1);
      }
    }
    return shiftedString;
  }
  return null;
};

// console.log(alphabeticShift('zseudopseudohypoparathyroidisZ'));

export { alphabeticShift };
