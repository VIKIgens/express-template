const express = require('express');
const bodyParser = require('body-parser');
    
const app = express();
    
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res) => res.send('Created by VIKIgens'));
    
module.exports = app;