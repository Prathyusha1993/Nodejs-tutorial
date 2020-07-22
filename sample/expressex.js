var express = require('express');
var app=express();

// app.set('view engine', 'jade');
app.get('/', function(req, res){
res.send('hello world whats up');
});

var server = app.listen(8080, function(){

});