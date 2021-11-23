// const express = require("express");
// const app = express();

// const http = require("http");
// const server = http.createServer(app);

// const socket = require("socket.io");
// const io = socket(server);

// io.on("connection", onConnection);

// function onConnection(socket) {
//   socket.on("canvas-data", (data) =>
//     socket.broadcast.emit("canvas-data", data)
//   );
// }

// const port = 8080;
// server.listen(port, () => console.log(`server is running on port ${port}`));

// ----------------------------------

// var app = require("express")();
var app = express();
var server = app.listen(3000);
var io = require("socket.io").listen(server);
// var http = require("http").Server(app);
// var io = require("socket.io")(http);
var cors = require("cors");
app.use(cors());

// app.use(cors({ credentials: true }));

io.on("connection", (socket) => {
  console.log("User Online");

  socket.on("canvas-data", (data) => {
    socket.broadcast.emit("canvas-data", data);
  });
});

// var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
// http.listen(server_port, () => {
//   console.log("Started on : " + server_port);
// });
