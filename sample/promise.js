//promises   npm install promise
//to aloww mang yoperation to happen concurrently and thus not block any user from performing an operation
var Promise = require('promise');

var MongoClient = require("mongodb").MongoClient;
var url='mongodb:localhost/EmployeeDB';

MongoClient.connect(url)
.then(function(err, db){
    db.collection('Employee').updateOne({
        "EmployeeName": "Martin"},
        {
            $set: {"EmployeeName": "mohan"}
        }
})

//nested promises
var Promise = require('promise');

var MongoClient = require("mongodb").MongoClient;
var url='mongodb:localhost/EmployeeDB';

MongoClient.connect(url)
.then(function( db){
    db.collection('Employee').insertOne({
        Employeeid:4,
        EmployeeName:"NewEmployee"
    })
.then(function(db1){
    db.collection('Employee').insertOne({
        Employeeid:5,
        EmployeeName:"NewEmployee1"
    })