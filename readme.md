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

brains-tsukubaのteamに入ってることを確認して、
```
git clone https://github.com/brains-tsukuba/brains_slack_bot
cd brains_slack_bot
npm install
token=xoxb-XXX(API Token)XXX node bot.js
```

tokenはHerokuから確認。HerokuのID＆PWは、知ってる人に聞いて。

slackでbrains-botに
```
brains get joinmessage
```
で入部者向けメッセージ来たら、動作チェックOK。
Herokuを止めてなければ、ローカルとHerokuの分で2通来る。

### 新たにコマンドを追加する
ボットに新たにコマンドを追加するには,

```
node generate.js [CommandName]
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
get(that) {
    const message = that.REPLY_MESSAGES_FOR_GET_METHOD(that.inputData.argument);
    that.hearContext.bot.reply(that.hearContext.message, message);
}
...
```

上記の例は, getオプションを追加した例です.

### 新たなモジュールを追加する
モジュールは共通化したい処理等をまとめるために作成します.<br>
モジュールは, worker_service以下に追加したいモジュール名と同じ名前のファイルを作成してください.
