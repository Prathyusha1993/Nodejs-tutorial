var express = require("express");
var app = express();

app.route('/Node').get(function(req, res){
    res.send("tutorial on node");
});

app.route('/React').get(function(req, res){
    res.send("react tutorial");
});

app.route('/').get(function(req, res){
    res.send("welcome to my tutoria sessions");
});

var server = app.listen(8080, function(){

});