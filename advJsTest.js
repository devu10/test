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

// const person = {
//   name: "person",
//   add: "nepal",
//   bio() {
//     return `this is a test for ${this.name} if ${this.add}`;
//   },
// };

// console.log(person.bio());

/*
function eventObj(name, post) {
  return {
    name,
    post,
    returningFun() {
      return `hey this is ${this.name} witht the posr of ${this.post}`;
    },
  };
}
const eventObj1 = eventObj("Amit", "head");

console.log(eventObj1, eventObj1.returningFun());
*/

// constructer function

/*

function EventObj(name, post) {
  this.name = name;
  this.post = post;
}

EventObj.prototype.bio = function () {
  return `hey this is ${this.name} with the position of ${this.post}`;
};

const eventObj1 = new EventObj("Anit", "head");

console.log(eventObj1.bio());
*/

// class based OOP

// class EventObj {
//   constructor(name, add) {
//     this.name = name;
//     this.add = add;
//   }

//   bio() {
//     return `this is ${this.name} from the streets of ${this.add}`;
//   }

//   toupper() {
//     this.name = this.name.toUpperCase();
//   }
// }

// const wobj = new EventObj("amit", "salyansthan");

// console.log(wobj.bio());

// wobj.toupper();

// console.log(wobj.bio());

/*
const obj = {
  name: "amit",
  bio: () => {
    console.log(this);
    console.log(this.name);
  },
};

obj.bio();
*/

// javascript oop
const eventData = {
  name: "new year",
  date: "1-1-2023",
  location: "kathmandu",
};

function dispalyEve(e) {
  return `this is the ${e.name} event, which happens at ${
    e.location
  } happened ${getEventdate(e.date)} years ago`;
}

function getEventdate(d) {
  return new Date().getFullYear() - new Date(d).getFullYear();
}

function newEvent(e) {
  return `the ${e.name} event of year ${
    new Date().getFullYear() + 1
  } will happen on date`;
}

console.log(dispalyEve(eventData));
