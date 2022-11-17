// setup interface to handle user input from stdin
const { stdin } = require("process");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    console.log("Move: up");
  }
  if (key === "s") {
    console.log("Move: down");
  }
  if (key === "a") {
    console.log("Move: left");
  }
  if (key === "d") {
    console.log("Move: right");
  }
};

module.exports = { setupInput };