/*
Count function
*/
function* count(...args) {
  if (typeof value !== "number") {
    throw new Error("Expected number, received - " + typeof value);
  }

  if (times && typeof times !== "number") {
    throw new Error("Expected number, received - " + typeof times);
  }

  let num = value;
  let limit = times;

  if (limit) {
    while (limit > 0) {
      --limit;
      yield ++num;
    }
  } else {
    while (true) {
      yield num++;
    }
  }
}

/*
Cycle function
*/
function* cycle(iter, times = Infinity) {
  while (times > 0) {
    yield* iter;
    times--;
  }
}

/* 
Repeat function
*/
function* repeat(value, times = Infinity) {
  if (typeof value !== "number") {
    throw new Error("Expected number, received - " + typeof value);
  }

  if (times && typeof times !== "number") {
    throw new Error("Expected number, received - " + typeof times);
  }

  return yield* cycle([value], times);
}

export { count, cycle, repeat };
