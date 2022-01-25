// 1 Найти в массиве вида ['red', 'green', 'green', 'yellow', 'red'] самую часто встречающуюся строку.

const arr = ['red', 'green', 'green', 'yellow', 'red'];

// 2 Напишите код, который сделает из массива объект

const arr = [
  {name: 'width', value: 10},
  {name: 'height', value: 20}
]

// {width: 10, height: 20}


// 3 Remove duplicates of an array and return an array of only
// unique elements
// ES6 Implementation
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]


// 4 task

function unique(arr) {
  /* ваш код */
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// mul
function mul(a, b) {
  return a * b;
};
var double = mul.bind(null, 2);
