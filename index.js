//app.js
var express = require('express');
var ejs = require("ejs");
  
var app = express();
app.engine('ejs',ejs.renderFile);
app.use(express.static('public'));

var bodyParser = require('body-parser'); //★追加
app.use(bodyParser.urlencoded({extended: false})); //★追加


var PORT = process.env.PORT || 3000;

var data = {
    'Taro':'taro@yamada',
    'Hanako':'hanako@flower',
    'Sachiko':'sachico@happy',
    'Ichiro':'ichiro@baseball',
};

app.get('/',(req, res) => {
    var msg = 'This is Index Page!<br>' 
        + '※メッセージを書いて送信して下さい。';
    res.render('index.ejs', 
        {
            title: 'Index', 
            content: msg, 
            data:data,
        });
});


var sarver = app.listen(PORT, () =>{
    console.log('Server is runnning!');
})
