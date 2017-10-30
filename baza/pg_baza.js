const { Client } = require('pg')
const client = new Client({
  host: 'postgres://alen:alen@localhost/Moja_baza',
  port: 5432,
  user: 'alen',
  password: 'alen',
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})
