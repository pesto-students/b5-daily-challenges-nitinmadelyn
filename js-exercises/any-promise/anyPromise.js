const anyPromise = (promises) => {
  const promisesAll = Array.from(promises);
  const promisesRejected = [];

  if (promisesAll.length === 0) {
    return Promise.reject(new Error('AggregateError: Empty input'));
  }

  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((value) => {
          promisesRejected.push(value);
          if (promisesRejected.length === promises.length) {
            reject(promisesRejected);
          }
        });
    }
  });
};
