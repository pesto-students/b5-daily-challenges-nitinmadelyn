const anyPromise = (promises) => {
  return new Promise(async (resolve) => {
    for (const promise of promises) {
      await Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch(() => {});
    }
    resolve("AggregateError: No Promise in anyPromise was resolved");
  });
};
