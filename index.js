const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const calc = require('./calc');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
 
app.post('/', (req, res) => {

    result = calc.add(req.body.numbers);
  res.send({result});
});
 
app.listen(3000, () => {
  console.log('Our express server is up on port 3000');
});

