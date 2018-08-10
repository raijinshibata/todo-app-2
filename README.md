# todo-app-2
参考サイト

環境設定時
GitHub
https://qiita.com/muneo/items/1321bf8cdb21178a73e2
https://techacademy.jp/magazine/6235(基本知識)
https://qiita.com/nnahito/items/565f8755e70c51532459 (コマンド)
http://yuzu441.hateblo.jp/entry/2014/07/24/234840  (add関連)
https://qiita.com/shibukk/items/80430b54ecda7f36ca44 (worktree追加)

Heroku
https://tech-camp.in/note/technology/16108/(導入)
https://qiita.com/chihiro/items/5c3ff400f6cb99deb945(作成)

Node.js
http://tacamy.hatenablog.com/entry/2013/02/10/141434
https://qiita.com/sinmetal/items/154e81823f386279b33c
https://qiita.com/takutoki/items/021b804b9957fe65e093 (環境変数は自分で弄った)

mongoDB
https://qiita.com/Frog_woman/items/f8a70286c7f1c4d5fc02 (初期設定)
Dbを開きながら新たなウィンドウでmongodってコマンドをうつ必要があった！
https://photo-tea.com/p/17/mongodb-command-how-to/ (基本操作)
https://dotinstall.com/lessons/basic_nodejs/26215
https://qiita.com/mimizq/items/76d3a948acb33881c8db (仕様変更で参考にしていたサイトとMongoClientの使い方が変わっていた)
https://qiita.com/toshi1127/items/04ea864bf0cd7125a47d (heroku上でmongoDB)
http://mongodb.github.io/node-mongodb-native/3.0/tutorials/collations/ (公式ドキュメント)

Procfileががないと動かんよ！コマンド
入力の出来るテーブルをつくろうとしてる
入力項目が複数あったりするのでデータの受け渡しについて理解を深めないとできなさそう（javascriptのお勉強）

JavascriptとPythonの違いfor inの時の要素の違いjavascriptは要素番号、Pythonは要素そのもの

/usr/local/var/log/mongodb/mongo.log
dbPath: /usr/local/var/mongodb

connecting to: mongodb://127.0.0.1:27017

各ディレクトリで”npm install --save mongodb”とコマンドを実行する必要があった


非同期処理に苦戦（コールバック関数）

Herokuをコマンドラインで使用するときはheroku上のアプリ名を引数で指定しないとだめ (heroku config -a アプリ名)

今のままじゃ削除しちゃう
チェックつけたやつは残してわかるようにする
DBにcompletedみたいなカラムが必要かな
<% >%でくくったらrenderの変数普通に使える(<%= %>いらない)

Node.js(javascript)の特異性
非同期処理(forの処理がおかしい無名関数等を使う)
Ejsの性質
