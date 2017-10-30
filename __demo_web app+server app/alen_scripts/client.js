var WebSocket = require('ws')
  , ws = new WebSocket('ws://localhost:8080/');
ws.on('open', function() {
    ws.send('podaci');
});
ws.on('message', function(message) {
    console.log('received: %s', message);
});
