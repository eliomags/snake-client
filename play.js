const net = require("net");
const { connect } = require("./client");

// establishes a connection with the game server

console.log("Connecting ...");
connect();

// conn.on("connect", () => {
//   conn.write("Hello from client!");
// });
