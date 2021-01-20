/*
Test Case 1
*/

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

anyPromise(promises).then((value) => console.log(value));


/*
Test Case 2
*/

const promise1 = Promise.reject(0);
const promise2 = Promise.reject(1);
const promise3 = Promise.reject(2);

const promises = [promise1, promise2, promise3];

anyPromise(promises).then((value) => console.log(value));