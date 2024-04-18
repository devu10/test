var globalVar = "global";

function outerFunScope() {
  var outerFunVar = "outer";

  function innerFunScope() {
    var innerFuncVar = "inner";

    console.log(innerFuncVar);
    console.log(outerFunVar);
    console.log(globalVar);
  }
}

const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

// console.log(counter1.value());

// counter1.increment();
// counter1.increment();
// console.log(counter1.value());

// counter1.decrement();
// console.log(counter1.value());
// console.log(counter2.value());

const person = {
  name: "person",
  add: "nepal",
  bio() {
    return `this is a test for ${this.name} if ${this.add}`;
  },
};

console.log(person.bio());
