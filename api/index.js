const express = require('express');
const app = express();
const PORT = process.env.APP_PORT || 8000;
const mysql = require('mysql')
require('dotenv').config();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Success to conect mysql database")
})

app.get('/', function(req, res){
    res.send('Hello World');
})

app.listen(PORT, function(){
    console.log(`Example app listening on port ${PORT}!`);
})