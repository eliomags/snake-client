const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP, // change to IP address of computer, more on that below
    port: PORT,
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
