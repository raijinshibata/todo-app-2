//app.js
var express = require('express');
var ejs = require("ejs");
  
var app = express();
app.engine('ejs',ejs.renderFile);
app.use(express.static('public'));

var bodyParser = require('body-parser'); //★追加
app.use(bodyParser.urlencoded({extended: false})); //★追加


var PORT = process.env.PORT || 3000;

// ※トップページ
app.get("/",(req, res) => {
    var msg = 'This is Index Page!<br>' 
        + 'Write a message.';
    var url = '/other?name=taro&pass=yamada';
    res.render('index.ejs', 
        {
            title: 'Index', 
            content: msg, 
            //link:{href:url, text:'※別のページに移動'}
        });
});

app.post('/',(req, res) => {
    var msg = 'This is Posted Page!<br>' +
        'あなたは「<b>' + req.body.message + 
        '</b>」と送信しました。';
    res.render('index.ejs', 
        {
            title: 'Posted', 
            content: msg, 
        });
});


var sarver = app.listen(PORT, () =>{
	console.log('Server is runnning!');
})
