// compile code will go here

// const path = require("path");
// const fs = require("fs");
// const solc = require("solc");

// const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
// const source = fs.readFileSync(inboxPath, "utf8");

// console.log(solc.compile(source, 1));

const path = require("path");
const fs = require("fs");
const solc = require("solc");

const compileContract = () => {
  const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
  const source = fs.readFileSync(inboxPath, "utf8");

  const input = {
    language: "Solidity",
    sources: {
      "Inbox.sol": {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  const contractBytecode =
    output.contracts["Inbox.sol"]["Inbox"].evm.bytecode.object;
  const contractAbi = output.contracts["Inbox.sol"]["Inbox"].abi;

  return {
    bytecode: contractBytecode,
    abi: contractAbi,
  };
};

module.exports = compileContract;
