const express = require('express')
const app = express()

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Jagman8980!"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)