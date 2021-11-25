// ----------------------------------
// var cors = require("cors");
var express = require("express");
var app = express();
// app.use(cors());
var server = app.listen(process.env.PORT || 4000);
var io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User Online");

  socket.on("canvas-data", (data) => {
    socket.broadcast.emit("canvas-data", data);
  });
});

//  var server_port = process.env.YOUR_PORT || process.env.PORT || 4000;
//  http.listen(server_port, () => {
//    console.log("Started on : " + server_port);
//  });
