const rangeIter = (from, to) => {
  return {
    [Symbol.iterator]() {
      let i = from;
      return {
        next() {
          if (to < from) {
            return {
              done: true,
            };
          }

          return {
            done: i > to,
            value: ++i,
          };
        },
      };
    },
  };
};

export { rangeIter };
