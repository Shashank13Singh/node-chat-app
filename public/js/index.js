var socket = io();
socket.on('connect', function () {
  console.log('Connected to the server');

  socket.emit('createMessage', {
    to: 'shashank',
    text: 'hey shashank how are you?'
  })
});

socket.on('disconnect', function () {
  console.log('Disconnected from the server');
});

socket.on('newMessage', function(message) {
  console.log('New Message', message);
});
