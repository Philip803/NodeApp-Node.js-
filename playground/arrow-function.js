// var square = (x) => {
//   var result =  x * x;
//   return result;
// }

var square = (x) => x * x;

console.log(square(9));

var user = {
  name: "Andrew",
  sayHi: () => {
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt(1,2,3);
