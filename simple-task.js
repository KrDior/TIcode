var obj = {name:"Ivan"};

var greeting = function(title){
    console.log(`welcome  ${title} ${this.name}`)
};

// welcom Mr Ivan
//creates a bound function that has same body and parameters
var bound = greeting.bind(obj);
bound('Mr');


const count = {
  count: 0,
  up(t) {
    t ? this.count + t : this.count++;
    return this;
  },
  down() {
    this.count--;
    return this;
  },
  showCound() {
    console.log(this.count);
  }
}

// count.up(2).down().down().showCount()



[{ id: 'foo', name: 'bar'}, { id: 'fiz', name: 'baz' }] => [{ foo: 'bar' }, { fiz: 'baz' }];

function arrModifier(arr) {
  return arr.map(el => {
    const {id, name} = el;

    return {[id]: name}
  })
}
