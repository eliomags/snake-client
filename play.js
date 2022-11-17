const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // change to IP address of computer, more on that below
    port: 50541,
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf-8");
  return conn;
};

console.log("Connecting ...");
connect();

// conn.on("connect", () => {
//   conn.write("Hello from client!");
// });
