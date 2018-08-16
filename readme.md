# Brains Slack Bot
brains slack team にて様々な機能を提供します.

## 使い方
このボットは

```
command option argument
```
の形でメッセージを受け付けて, 処理を実行します.

使用可能なコマンドは, helpコマンドのlistオプションを使用して確認してください.

```
help list
```

また, 各コマンドで使用可能なオプションは,

```
brains help list
```

のようにコマンドのhelpオプションに対して, listを渡すことで確認できます. (上記の例は, brainsコマンドのオプション一覧を表示しています.)

オプションに渡す引数について調べるには,

```
brains help get
```

とします. (上記の例は, brainsコマンドのgetオプションについての引数を調べています.)

## 開発

### 環境構築

*クライアントIDやトークンの管理に .env ファイルを使用しています. はじめに, 管理者(Yohei Hasegawa)から .env ファイルを受け取ってください.*

brains-tsukuba の GitHub Organization に加入後, brains_slack_bot を clone して, 必要なモジュールをインストールしてください.
```
git clone https://github.com/brains-tsukuba/brains_slack_bot
cd brains_slack_bot
npm i
```

DB は Postgres で, ORM に Sequelize を使用しています.   
Migration 後に初期データを挿入します.
```
sequelize db:migrate --env development
sequelize db:seed:all
```
*注 sequelize をグローバルにインストールしていない場合は, sequelze の部分が node_modules/.bin/sequelize になります.*

Botの立ち上げコマンドは以下の通りです.
```
npm start
```

動作確認は, Bot を立ち上げた上で, brains slack team でこの Bot をメンションするか, DM で何か適当なコマンドを送信してください.
```
(Slack @brainsbotDev がいるチャンネルで)
@brainsbotDev brains get joinmessage

(Slack @brainsbotDev DM で)
brains get joinmessage
```
正常に動作していれば, 応答が Heroku とローカルの2つ来ます.

### 新たにコマンドを追加する
ボットに新たにコマンドを追加するには,

```
npm run generate -- [CommnadName]
```

を実行してください. これで新たなコマンドの雛形が生成されます.

```javascript
const BaseManager = require('./BaseManager');
module.exports = class SlackManager extends BaseManager {
  constructor(inputData, hearContext) {
    super(inputData, hearContext, ['']);
  }
}
```

super()の第三引数に文字列の配列の形で, 必要なモジュール名を追加することで, そのモジュールを使用することができます.

```javascript
const BaseManager = require('./BaseManager');
module.exports = class BrainsManager extends BaseManager {
  constructor(inputData, hearContext) {
    super(inputData, hearContext, ['ChannelJoinService']);
  }
}
```

モジュールの作成は後述します.

### 新たにオプションを追加する
ボットに新たにオプションを追加するには, オプションを追加したいコマンドに対して, オプション名と同じ名前のメソッドを実装してください.

```javascript
...
get() {
  const argument = this.inputData.argumnet;
  const message = this.REPLY_MESSAGES_FOR_GET_METHOD(argument);
  this.reply(this.message, message);
}
...
```

上記の例は, getオプションを追加した例です.

### 新たなモジュールを追加する
モジュールは共通化したい処理等をまとめるために作成します.  
モジュールを作成するには以下のコマンドを使用します.
```
npm run module -- [ModuleName]
```
これを実行すると, worker_service 以下に, [ModuleName]Service.js というファイルが生成されます.