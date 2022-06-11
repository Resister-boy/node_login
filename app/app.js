'use strict';

// MODULE
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// ROUTING
const home = require('./src/routes/home');

app.set('views', './app/src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public/`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// URL을 통해 전달하는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식하지 못하는 문제 해결.

app.use('/', home); // use => js문법에서 미들웨어를 등록해주는 Method!

module.exports = app;