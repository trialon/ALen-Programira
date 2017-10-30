

var ws = new WebSocket('ws://localhost:8080');
ws.onopen = function () {
  ws.send('podaci'); // Send the message 'Ping' to the server
};
ws.onmessage = function (event) {
  updateStats(event.data);
};
