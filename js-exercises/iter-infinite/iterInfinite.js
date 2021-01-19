/*
Count function
*/
function* count(start, step = Infinity) {
  if (typeof start !== "number") {
    throw new Error("Expected number, received - " + typeof start);
  }

  if (step && typeof step !== "number") {
    throw new Error("Expected number, received - " + typeof step);
  }

  while(step > 0){
    yield start;
    step--;
    start++;
  }
}

/*
Cycle function
*/
function* cycle(iter, step = Infinity) {
  while (step > 0) {
    yield* iter;
    step--;
  }
}

/* 
Repeat function
*/
function* repeat(start, step = Infinity) {
  if (typeof start !== "number") {
    throw new Error("Expected number, received - " + typeof start);
  }

  if (step && typeof step !== "number") {
    throw new Error("Expected number, received - " + typeof step);
  }

  return yield* cycle([start], step);
}

export { count, cycle, repeat };
