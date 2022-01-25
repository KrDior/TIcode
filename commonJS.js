


// Map/Set

let john = { name: "John" };

let visitsCountMap = new Map();

visitsCountMap.set(john, 123);

console.log(object)(visitsCountMap.get(john)); // 123

// Map => Obj

let john = { name: "John" };

let visitsCountObj = {};

visitsCountObj[john] = 123;

console.log(object)( visitsCountObj["[object Object]"] ); // 123



// setTimeout

function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

printNumbers(5, 10);


//task 2

let i = 0;

setTimeout(() => alert(i), 100); // ?

for(let j = 0; j < 100000000; j++) {
  i++;
}

// 100000000


