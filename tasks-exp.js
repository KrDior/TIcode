// https://habr.com/ru/company/ruvds/blog/334538/

// 1. Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]?

function getStr() {
	return [].slice.call(arguments, 1).join(arguments[0])
}

// 3.чтобы работало
for (var i = 0; i < 10; i++) {
	setTimeout(function () {
		console.log(i);
	}, 100);
}

// Задача про палиндром
'abba'

function getObj(arr) {
  var obj = {};

  arr.forEach(function(item){
      obj[item.name] = item.value;
  });

  return obj;
}

// В js переменные объявленные следующим образом:
// a=3; b=«hello»;
// Укажите правильные утверждения.
// а) создаются в локальном контексте
// б)* создаются в глобальном контексте
// в)* создание переменной без ключевого слова var — синтаксическая ошибка.


// Необходимо, чтобы этот код выводил в лог doggo, но он выводит лишь undefined

let dog = {
  name: 'doggo',
  sayName() {
    console.log(this.name)
  }
}
let sayName = dog.sayName
sayName()



//
// [1, 8, 13, 14, 7, 10, 3, 4, 11, 12] ==> [10, 11, 12, 13, 14, 1, 3, 4, 8]

//

var obj1 = {
  name: 'Ivan'
}

var obj2 = {
  age: 30
}

// fnSort([1, 8, 13, 14, -7, 10, 3, 4, -11, 12], 10) ==> [10, 11, 12, 13, 14, 1, 3, 4, 8]
