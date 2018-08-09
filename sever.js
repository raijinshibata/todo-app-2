const express = require('express');
let hbs = require('hbs');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
let app = express();
app.set('view engine', 'hbs');

//promise設定しとく
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017');