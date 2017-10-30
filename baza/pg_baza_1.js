var pg = require('pg');
var pgClient = new pg.Client('postgres://alen:alen@localhost:5432/Moja_baza');

pgClient.connect(function(err) {
  if (err) throw err;
  pgClient.query("select vrijednost from mjerenje" ,function(err,rez){
    console.log((rez.rows));
    //console.log(JSON.stringify(rez.rows[0].vrijednost));

    //var s_pom = JSON.stringify(rez.rows);

    //var j_pom = JSON.parse(s_pom);
    //console.log(j_pom.rows);
  } )
});
