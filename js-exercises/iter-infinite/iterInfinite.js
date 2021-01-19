/*
Count function
*/
function* count(...args) {
  if (typeof args[0] !== 'number') {
    throw new Error('Expected number, received - ' + typeof args[0]);
  }

  if (args[1] && typeof args[1] !== 'number') {
    throw new Error('Expected number, received - ' + typeof args[1]);
  }

  let num = args[0];
  let limit = args[1];

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
function* cycle(...args) {
  if (typeof args[0] !== 'string') {
    throw new Error('Expected string, received - ' + typeof args[0]);
  }

  if (args[1] && typeof args[1] !== 'number') {
    throw new Error('Expected number, received - ' + typeof args[1]);
  }

  const inputString = args[0];
  let noOfTimes = args[1];
  let i = 0;

  if (noOfTimes) {
    while (true) {
      yield inputString[i];

      if (i === inputString.length - 1) {
        i = 0;
        --noOfTimes;
        if (noOfTimes === 0) {
          return;
        }
      } else {
        i++;
      }
    }
  } else {
    while (true) {
      yield inputString[i];
      if (i === inputString.length - 1) {
        i = 0;
      } else {
        i++;
      }
    }
  }
}

/* 
Repeat function
*/
function* repeat(...args) {
  if (typeof args[0] !== 'number') {
    throw new Error('Expected number, received - ' + typeof args[0]);
  }

  if (args[1] && typeof args[1] !== 'number') {
    throw new Error('Expected number, received - ' + typeof args[1]);
  }

  const num = args[0];
  let repeatTimes = args[1];

  if (repeatTimes) {
    while (repeatTimes > 0) {
      --repeatTimes;
      yield num;
    }
  } else {
    while (true) {
      yield num;
    }
  }
}

export { count, cycle, repeat };
