var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var PORT = 8080;
app.use(bodyParser.json())

var data = [
   {
      "Name" : "Mahesh Parashar",
      "RollNo" : 101,
      "Percentage" : "80%"
   },
	
   {
      "Name" : "Dinkar Kad",
      "RollNo" : 201,
      "Percentage" : "70%"
   },
	
   {
      "Name" : "Robert",
      "RollNo" : 191,
      "Percentage" : "75%"
   },
	
   {
      "Name" : "Julian Joe",
      "RollNo" : 111,
      "Percentage" : "77%"
   }
]

console.log(JSON.stringify(data));

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.get('/data', function(req, res){
	res.send(JSON.stringify(data));
})

app.listen(PORT, function(){
	console.log('server start at ');
})