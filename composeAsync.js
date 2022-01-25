// 1.
// Дан массив функций requests.
// Каждая функция возвращает промис.
// Написать функцию, которая вызывает по очереди каждую функцию из requests и передаёт в неё в качестве входного аргумента результат предыдущей функции.
// Если какая-либо из функций реджектается, возвращать Promise.reject(). Иначе вернуть результат выполнения последней функции.
const timeOut = (t) => {
  console.log('!!!!', t)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (t > 30000) {
        reject(t)
      } else {
        resolve(t * 2)
      }
    }, t)
  })
}

const requests = [timeOut, timeOut, timeOut];

const applyAsync = (acc,val) => {
  console.log(acc, val)
  return acc.then(val);
};
const composeAsync = (funcs) => x => {
  const res = funcs.reduce(applyAsync, Promise.resolve(x));
  return res;
};
const transformData = composeAsync(requests);

// transformData(1000).then(val => console.log(val))

const composeAsync2 = async (requests, start) => {
  let res = 1000;
  for (const f of requests) {
    res = await f(res);
  }
  return res;
}

composeAsync2(requests, 1000).then(val => console.log(val));
