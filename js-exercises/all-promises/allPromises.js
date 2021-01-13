const allPromises = args => {
  const results = [];

  for (const eachPromise of args) {
    Promise.resolve(eachPromise)
      .then(response => results.push(response));
  }

  return Promise.resolve(results);
};

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//    setTimeout(resolve, 100, 'foo');
// });

// allPromises([promise1, promise2, promise3]).then((values) => {
//    console.log(values);
// });

export {
  allPromises,
};
