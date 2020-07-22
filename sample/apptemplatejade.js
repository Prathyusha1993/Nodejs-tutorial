var express = require("express");

var app = express();

app.set('view engine', 'jade'); //The first thing to specify in the application is "view engine" that will be used to render the templates. Since we are going to use jade to render our templates, we specify this accordingly.
app.get('/', function(req, res){
    res.render('templatejade', 
    {title:'creating template using jade', message:'Welcome'})
});

var server = app.listen(8080, function(){

});