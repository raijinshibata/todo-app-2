const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const assert = require('assert')
//var db = 'test_db'

MongoClient.connect('mongodb://127.0.0.1:27017/myDB', (err, client) => {
    assert.equal(null, err)
    const db = client.db('test_db');
    console.log("Connected successfully to server")
    db.collection('user', (err, collection) =>{
    	var docs = [
    		{name: "yamada", score: 80},
    		{name: "tanaka", score: 50},
    		{name: "ishida", score: 40}

    	];
    	// collection.insert(docs, (err,result) =>{
    	// 	console.dir(result)
    	// });
    		collection.find().toArray((err, items) =>{
    			console.log(items);
    		});
    });
    client.close()		//db.close()じゃないよ
})