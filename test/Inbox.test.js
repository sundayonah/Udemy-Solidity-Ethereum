// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

beforeEach(() => {
  //gET A LIST OF ALL ACCOUNTS
  web3.eth.getAccounts().then((fetchedAccounts) => {
    console.log(fetchedAccounts);
  });

  //use one of those accounts to deploy the contract
});

describe("inbox", () => {
  it("deploy a contract", () => {});
});

//MOCHA EXAMPLE
// let car;

// beforeEach(() => {
//   car = new Car();
// });

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
//     assert.equal(car.park(), "Stopped");
//   });

//   it("Can drive", () => {
//     assert.equal(car.drive(), "Vroom");
//   });
// });
