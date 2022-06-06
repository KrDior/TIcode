// Task 3
const fnLog = (val) => console.log(val);
const fnSetTimeout = (val) => setTimeout(() => console.log(val));
const fnPromise = (val) => Promise.resolve().then(() => console.log(val))


fnLog(1);
fnSetTimeout(2);
fnPromise(3);
fnLog(4);

// Task 4

setTimeout(() => fnLog(1));
setTimeout(() => fnLog(2), 0);
fnLog(3)

// Task 5

setTimeout(() => fnLog(1), 1000);
setTimeout(() => fnLog(2), 2000);
setTimeout(() => fnLog(2), 3000);

// Task 1

console.log(1)

Promise.resolve()
    .then(() => console.log(2))
    .then(() => console.log(3))

setTimeout(() => console.log(4));

new Promise((res) => {console.log(5); res();})
    .then(() => console.log(6));


console.log(7);

// 1 4 7 2 3 5 6

// Task 2

(() => {
  setTimeout(() => {
    console.log(1)
  }, 0);
})()

console.log(2)
new Promise((resolve, reject) => {
  resolve(console.log(3))
})

console.log(4)

new Promise((resolve, reject) => {
  console.log(5)
  setTimeout(() => {
    console.log(7)
    resolve();
  }, 0);
})
.then(() => console.log(6))

// 2 3 4 5 1 7 6
