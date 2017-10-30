var ws = new WebSocket('ws://localhost:8080');

var ar_pom = [];
ws.onopen = function () {
  ws.send('podaci'); // Send the message 'Ping' to the server
};
ws.onmessage = function (event) {
  ar_pom = JSON.parse(event.data);
  console.log(event.data);
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [ar_pom[2].vrijednost, ar_pom[3].vrijednost, ar_pom[4].vrijednost],
    type: 'scatter'
  };
  var trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
  };
  var data = [trace1, trace2];
  Plotly.newPlot('myDiv', data);

};
