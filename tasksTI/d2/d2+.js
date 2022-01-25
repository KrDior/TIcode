// 2.
// Полифил для Array.flat();

const arr = [1, 2, [3, 4, [5, 6]]];

function flatten(arr) {
  const flattend = [];
  (function flat(arr) {
    arr.forEach(element => {
      if (Array.isArray(element)) {
        flat(element);
      } else {
        flattend.push(element);
      }
    });
  })(arr);
  return flattend;
}

console.log(flatten(arr));
