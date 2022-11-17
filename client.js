const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // change to IP address of computer, more on that below
    port: 50541,
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: XYZ");
  });

  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 500);
  // });

  // interpret incoming data as text
  conn.setEncoding("utf-8");
  return conn;
};

module.exports = { connect };
