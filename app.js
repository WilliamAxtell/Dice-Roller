//import express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const tasks = require('./routes/tasks');

app.use(express.static('./public'));

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', tasks);

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
