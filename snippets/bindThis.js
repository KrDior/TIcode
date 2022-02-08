// Taks 1

var name = 'Sam';

const bill = {
  name: 'Bill',
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);

    const greetInRussian = () => {
      console.log(`Привет, меня зовут ${this.name}`);
    };

    const greetInFrench = function () {
      console.log(`Salut mon nom est ${this.name}`);
    };

    greetInRussian.bind(this)();
    greetInFrench();
  }
}

bill.greet();


// task 2

const obj = {
  name: "Ivan",
  getName: () => console.log(this.name)
};

obj.getName();

const obj2 = {
  name: "Denis",
  getName: function () {
    console.log(this.name)
  }
};

obj2.getName();


// Task 3

this.name = 'Ivan';
const user = {
  name: 'Anna',
  getName: function() { console.log(this.name) }
};

user.getName();

const getName = user.getName;
getName();

// Ivan

const boundGetName = getName.bind(user);
boundGetName();
// Anna


// 4
const obj2 = {
  name: "Ivan",
  getName: () => console.log(this.name),
  sayName() {
    const arrow = () => console.log(this.name);
    arrow();
  }
};
