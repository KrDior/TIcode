// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5
function f(a, b) {
  if (b !== undefined) {
    return a + b;
  } else {
  return function (b) {
    return a + b;
    }
  }
}
