var express = require('express');
var router = express.Router();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const assert = require('assert');

const db_url = 'mongodb://127.0.0.1:27017/todoDB';



var data_list = [];

router.get('/',(req, res, next) => {
    var data = {
        title: 'Hello!',
        content: 'やる事を追加する場合は入力してください'
    };
    res.render('hello', data);
});

router.post('/post',(req, res, next) => {
    MongoClient.connect(db_url, (err, client) => {
        assert.equal(null, err)
        const db = client.db('test_db');
        console.log("Connected successfully to server")
        db.collection('todo_list', (err, collection) =>{

        //入力された値をデータベースに格納
        var new_data = req.body['new_data'];
         collection.insert({todo: new_data}, (err,result) =>{

         });
            //データベースからデータを取ってくる
            collection.find().toArray((err, items) =>{
                var db_data = items;
                console.log(db_data);
                var data = {
                    title: 'todo-list',
                    content: db_data
                };
                res.render('hello_post', data);
            });

        });
        // db.collection("user").deleteMany({'name' : 'yamada'}, function(err, result) {
        //     if (err) throw err;
        //     console.log("delete");
        // });

        client.close();      //db.close()じゃないよ
    });
});

module.exports = router;