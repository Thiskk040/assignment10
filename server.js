var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app);

var fs = require('fs');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


// read from file to user
//ทำให้สมบูรณ์
app.get('/inmsg', async (req, res) => {
  res.send('log.json');
})

//from user, write data to file
//ทำให้สมบูรณ์
app.post('/outmsg', async (req, res) => {
      
})

// read json data from file
//ทำให้สมบูรณ์
const readMsg = () => {
  return new Promise((resolve,reject) => {
      
  })
} 

// update json data
//ทำให้สมบูรณ์
const updateMsg = (new_msg, data1) => {
  return new Promise((resolve,reject) => { 
      
  });
}

// write json data to file
//ทำให้สมบูรณ์
const writeMsg = (data) => {
  return new Promise((resolve,reject) => {
    
})};

var server = http.listen(3001, () => {
  console.log('server is running on port http://localhost:'+ server.address().port);
});