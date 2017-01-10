'use strict';

module.exports = exports = {};

exports.nickCommand = function(message, socket) {
  socket.username = message.split(' ').slice(1).join(' ').trim();
  socket.write(`you are now ${socket.username}\n`);
};

exports.dmCommand = function(message, array) {
  let toUsername = message.split(' ')[1];
  let content = message.split(' ').slice(2).join(' ').trim();
  array.forEach(user => {
    if (user.username === toUsername)
      user.write(content + '\n');
  });
};

exports.usersCommand = function(array, socket) {
  array.forEach(user => {
    socket.write(user.username + '\n');
  });
};

exports.trollCommand = function(message, array) {
  let content = message.split(' ').slice(1).join(' ').trim();
  array.forEach(user => {
    for (var i = 0; i < 10; i++){
      user.write(content + '\n');
    }
  });
};

exports.banCommand = function(message, array) {
  let toUsername = message.split(' ')[1].trim();
  array.forEach(s => {
    if (s.username === toUsername)
      s.end(`${s.username} has been banned\n`);
  });
};

exports.infoCommand = function(socket) {
  let addr = socket.address();
  socket.write(`port: ${addr.port}\n`);
  socket.write(`family: ${addr.family}\n`);
  socket.write(`address: ${addr.address}\n`);
  socket.write(`Bytes sent: ${socket.bytesWritten}\n`);
  socket.write(`Bytes received: ${socket.bytesRead}\n`);
};
