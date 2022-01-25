
// 2.
// Полифил для Array.flat();

// 3.
// Отсортировать массив числе по сумме цифр числа: customSort([53, 10000, 61, 1100]); // [10000, 1100, 61, 53]

const customSort = (arr) => {
  const numCounter = (val) => {
    return val.toString().split('').reduce((acc, cur) => acc + Number(cur), 0);
  }

  return arr.sort((a,b) => numCounter(a) - numCounter(b));
}

console.log(customSort([53, 10000, 61, 1100]));
// 4. Написать юнит тесты для задачи 3.

// 5. Полифил для Promise.all()

// 6. Найти в массиве вида ['red', 'green', 'green', 'yellow', 'red'] самую часто встречающуюся строку.

// 7. Реализовать функцию zip работающую по принципу:
// zip(['Jack', 'John', 'Charles'], ['Mary', 'Jane', 'Martha']); // [['Jack', 'Mary'], ['John', 'Jane'], ['Charles', 'Martha']]

// 8. Реализовать функцию unzip, работающую как zip, но в обратную сторону.

// 9.

// for(let i of delay([1,2,3,4], 100)) {
//     console.log(await i);
// }
// Write a function delay getting an array of values and delay size which returns passed values with provided delay.
