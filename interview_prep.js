function createBase(base) {
  const baseValue = base;

  return function(num) {
    return num + baseValue;
  }
}

const addSix = createBase(6);

// console.log(addSix(10)) // returns 16
// console.log(addSix(21)) // returns 27

var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW

function reverse(str) {
  return str.split('').reverse().join('');
}

// console.log(reverse(string));

(function() {
  const a = b = 5;
})();

// console.log(b);

function unique(arr) {
  const res = [];

  arr.forEach(el => {
    res[el] = '';
  });

  return Object.keys(res).map(num => Number(num))
}

// console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3])); // => [1, 2, 4, 3, 7]

// const flat = (arr) => arr.join().split(',')
function flat(arr) {
  let res = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      res = [...res, ...flat(el)]
      // res = res.concat(flat(el));
    } else {
      res.push(el);
    }
  })

  return res;
}

// console.log(flat([1, [2, [3, [4,5]]]])); // => [1, 2, 3, 4, 5]


const tree = {
	value: 1,
	children: [
		{
			value: 2,
			children: [
				{ value: 4 },
				{ value: 5 },
			]
		},
		{
			value: 3,
			children: [
				{ value: 6 },
				{ value: 7 },
			]
		}
	]
};

function getTreeValues(tree) {
  let res = [tree.value];

  if (Array.isArray(tree.children )) {
    tree.children.forEach(el => {
      res = [...res, ...getTreeValues(el)]
    })
  }

  return res;
}

// console.log(getTreeValues(tree)); // => [1, 2, 3, 4, 5, 6, 7]

// Необходимо написать функцию, принимающую в аргументах массив и возвращающую новый массив, в котором отсортированы все нечетные числа по возрастанию, в то время как чётные остаются на своих местах.

function oddSort(arr) {
  const sortedNotOdd = [...arr].sort((a,b) => a - b).filter(el => el%2 !== 0);
  let curInd = 0;

  return [...arr].map((el) => {
    return el%2 !== 0 ? sortedNotOdd[curInd++] : el;
  })
}

// console.log(oddSort([7, 3, 4, 9, 5, 2, 17])); // => [3, 5, 4, 7, 9, 2, 17]

function isEqualSymbols(a, b) {
  const arr1 = a.split('');
  const arr2 = b.split('');

  return !arr1.some(el => {
    return !arr2.includes(el);
  })
}

// console.log(isEqualSymbols('кот', 'ток')); // => true
// console.log(isEqualSymbols('кот', 'тик')); // => false

// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и некоторый «звук взрыва» (строку, которую вернет через заданное время). С фантазией задача.

function Bomb(message, delay) {
	this.message = message;

	setTimeout(this.blowUp.bind(this), delay * 1000); // взрываем через delay sec
}

Bomb.prototype.blowUp = function () {
	console.log(this.message);
};

new Bomb("Explosion!", .5);
