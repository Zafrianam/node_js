var http = require('http');
var express = require("express");
var app = express();
var server = http.Server(app);

app.get('/',function(rep,res){
  res.sendFile(__dirname+'/index.html');
})
app.get('/about',function(rep,res){
  res.sendFile(__dirname+'/about.html');
})


  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });
