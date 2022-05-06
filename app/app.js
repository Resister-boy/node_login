'use strict';

// MODULE
const express = require('express');
const app = express();
const PORT = 4000;

// ROUTING
const home = require('./routes/home');

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use('/', home); // use => js문법에서 미들웨어를 등록해주는 Method!

module.exports = app;