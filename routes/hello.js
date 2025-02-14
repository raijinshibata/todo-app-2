var express = require('express');
var router = express.Router();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const assert = require('assert');

//ローカル用DB URL
//const db_url = 'mongodb://127.0.0.1:27017/toDB';
// heroku用DB URL
const db_url =  'mongodb://heroku_3ds27242:gi4da16afn0r2a5p3n87k8p8h1@ds129811.mlab.com:29811/heroku_3ds27242'

//ローカル用DB名
//const db_name = 'todoDB';
//heroku用DB名
const db_name = 'heroku_3ds27242';


router.get('/',(req, res, next) => {

        MongoClient.connect(db_url, (err, client) => {
        assert.equal(null, err)
        const db = client.db(db_name);
        //console.log("Connected successfully to server")
        db.collection('todo_list', (err, collection) =>{



            //データベースからデータを取ってくる
            collection.find().toArray((err, items) =>{
                var db_data = items;
                console.log(db_data);
                var data = {
                    title: 'todo-list',
                    content: db_data
                };
                res.render('hello', data);
            });

        });
        // db.collection("user").deleteMany({'name' : 'yamada'}, function(err, result) {
        //     if (err) throw err;
        //     console.log("delete");
        // });

    });
});

router.post('/post',(req, res, next) => {




    //値の追加とtodoリストの表示
    MongoClient.connect(db_url, (err, client) => {
        assert.equal(null, err)
        const db = client.db(db_name);
        //console.log("Connected successfully to server")
        db.collection('todo_list', (err, collection) =>{

            //入力された値をデータベースに格納
            var new_data = req.body.new_data;
            var del_list = req.body.item;
            console.log(new_data);
            console.log(del_list);


            //データベースからデータを取ってくる
            collection.find().toArray((err, items) =>{
                var db_data = items;
                //console.log(db_data);

                if (typeof new_data === 'undefined'){
                //チェック更新
                    try{
                        //console.log(Number(req.body.item[0]));
                        //１個しか消さないとき配列にする
                        if(Array.isArray(del_list)==false){
                            del_list = [del_list];
                        }
                        for(var i in del_list){
                            //チェックつけたものは完了とする
                            
                            collection.updateMany({'todo' : del_list[i]}, {$set:{'completed' : true}}, (err, items) => {
                                console.log(del_list[i]);
                                //最後ならrenderへ 
                                // if (i==del_list.length-1){
                                //     console.log(i);
                                //     collection.find().toArray((err, items) =>{
                                //         var db_data = items;
                                //         var data = {
                                //             title: 'todo-list',
                                //             content: db_data
                                //         };
                                //         res.render('hello_post', data);

                                client.close();      //db.close()じゃないよ
                                //     });
                                // }
                            });
                            var data = {
                                title: 'todo-list',
                                content: db_data
                            };
                            //collection.deleteMany({'todo': del_list[i]});
                            res.render('hello_post', data);
                            // client.close();      //db.close()じゃないよ

                        }

                    } catch(err){
                    }
                } else{
                //リストを更新する処理
                    if(new_data ==null || new_data==""){
                        //入力事項が空なら何も送信しない
                        var data = {
                            title: 'todo-list',
                            content: db_data
                        };
                        res.render('hello_post', data);

                        client.close();

                    }else{
                        collection.insert({todo: new_data, completed: false}, (err,result) =>{
                            //データベースからデータを取ってくる
                            collection.find().toArray((err, items) =>{
                                var db_data = items;
                                var data = {
                                    title: 'todo-list',
                                    content: db_data
                                };
                                res.render('hello_post', data);

                                client.close();      //db.close()じゃないよ
                            });
                        });
                    }
                }


            });

        });
        // db.collection("user").deleteMany({'name' : 'yamada'}, function(err, result) {
        //     if (err) throw err;
        //     console.log("delete");
        // });

    });
});

router.post('/delete_item',(req, res, next) => {
    var data = {
        title: 'Hello!',
        content: 'やる事を追加する場合は入力してください'
    };
    res.render('delete_item', data);
});


module.exports = router;
