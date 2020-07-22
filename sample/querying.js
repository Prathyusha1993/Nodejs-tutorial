var MongoClient = require("mongodb").MongoClient;
var url='mongodb:localhost/EmployeeDB';

//querying
MongoClient.connect(url, function(err, db){
    var cursor = db.collection('Employee').find();
    cursor.each(function(err, doc){
        conosle.log(doc);
    })
})

//inserting
MongoClient.connect(url, function(err, db){
    db.collection('Employee').insertOne({
        employeeid:4,
        EmployeeName:"NewEmployee"
    });
})

//updating
MongoClient.connect(url, function(err, db){
    db.collection('Employee').updateOne({
        "EmployeeName": "NewEmployee"},
        {
            $set: {"EmployeeName": "mohan"}
        }
    })

//deleting
MongoClient.connect(url, function(err, db){
    db.collection('Employee').deleteOne({
        "EmployeeName": "Mohan"
    });

