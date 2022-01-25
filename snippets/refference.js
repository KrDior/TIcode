// Task 1
var a = 2;
var b = a;

a += 1;

console.log(a);
console.log(b);

var c = [1,2,3];
var d = c;

c.push(4);

console.log(c);
console.log(d)


// Task 2

const obj = {
  name: "Alice"
};

function changeName(obj) {
  obj = {
    name: "Bill"
  }
}

changeName(obj);

console.log(obj.name);

function changeName2(obj) {
  obj.name = "Mike";
}
changeName2(obj);
console.log(obj.name);
