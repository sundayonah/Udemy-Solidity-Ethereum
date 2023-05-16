// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

// class Car {
//   park() {
//     return "Stopped";
//   }

//   drive() {
//     return "Vroom";
//   }
// }

// describe("Car", () => {
//   it("Can Park", () => {
//     const car = new Car();
//     assert.equal(car.park(), "Stopped");
//   });

//   it("Can drive", () => {
//     const car = new Car();
//     assert.equal(car.drive(), "Vroom");
//   });
// });
