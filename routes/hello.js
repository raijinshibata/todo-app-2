var express = require('express');
var router = express.Router();


var data_list = [];

router.get('/',(req, res, next) => {
    var data = {
        title: 'Hello!',
        content: 'やる事を追加する場合は入力してください'
    };
    res.render('hello', data);
});

router.post('/post',(req, res, next) => {
    var msg = req.body['message'];
    data_list.push(msg)
    var data = {
        title: 'todo-list',
        //content: 'あなたは、「' + msg + '」と送信しました。<br>'
        content: data_list
    };
    res.render('hello_post', data);
});

module.exports = router;