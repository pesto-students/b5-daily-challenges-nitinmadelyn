function curry(fn) {
  const totalArgs = fn.length;
  function finalFn(n, args) {
    return function nextCurriedFn(...a) {
      if (n <= a.length) {
        return fn(...args, ...a);
      }
      return finalFn(n - a.length, [...args, ...a]);
    };
  }
  return finalFn(totalArgs, []);
}

export { curry };

// all test cases

// const add = curry((a, b) => {
//  return a + b;
// });
// console.log("1 = ",add(1)(2));

// const output = curry((n) => {
//  return n;
// });
// console.log("2 = ",output(1));

// const add1 = curry((a, b, c) => {
//  return a + b + c;
// });
// console.log("3 = ",add1(1, 2)(3));

// const add2 = curry((a, b, c) => {
//  return a + b + c;
// });
// console.log("4 = ",add2(1)(2)(3));

// const add3 = curry((a, b, c) => {
//  return a + b + c;
// });
// console.log("5 = ", add3(1)(2)(3));
// console.log("6 = ",add3(2)(3)(4));

// const merge = curry((a, b, c) => {
//  return [a, b, c].join(', ');
// });
// console.log("7 = ", merge('1')(2)(3));

// const add4 = curry((a, b, c, d) => {
//  return a + b + c + d;
// });
// const firstTwo = add4(1)(2);
// console.log("8 = ", firstTwo(3)(4));
// const firstThree = firstTwo(5);
// console.log("9 =",firstThree(6));
