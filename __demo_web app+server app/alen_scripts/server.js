var pg = require('pg');
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});
var pgClient = new pg.Client('postgres://alen:alen@localhost:5432/Moja_baza');


wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
        if (message == 'podaci') {
          pgClient.connect(function(err) {
            if (err) throw err;
              pgClient.query("select vrijednost from mjerenje" ,function(err,rez){
                console.log(JSON.stringify(rez.rows));
                ws.send(JSON.stringify(rez.rows));
              } )
            });
        }

    });

});
