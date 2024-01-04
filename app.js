//import express
const express = require('express');
const app = express();

app.use(express.static('public'));

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