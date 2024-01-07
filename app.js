//import express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const tasks = require('./routes/tasks');

app.use(express.static('./public'));

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', tasks);

const start = () => {
    try {
        //listen on port 3000
        app.listen(3000, () => {
            console.log('server started');
        });
    } catch (error) {
        console.log(error);
    }
}

start();