//app.js
var express = require('express');
var ejs = require('ejs');

var app = express();
app.engine('ejs', ejs.renderFile);


var PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('index.ejs',
  	{title: 'Index',
  		content: 'This is Express-app Top page!'});
});

var sarver = app.listen(PORT, () =>{
	console.log('Server is runnning!');
})
