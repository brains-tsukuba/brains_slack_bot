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

#### レポジトリのクローン
**brains-tsukuba の GitHub Organization に加入後**, brains_slack_bot を clone してください.  
brains-tsukuba organization の加入に関しては, Yohei Hasegawa に連絡してください.
```
$ git clone https://github.com/brains-tsukuba/brains_slack_bot
$ cd brains_slack_bot
```

#### PostgreSQLについて
brains_slack_bot では DB に PostgreSQL を使用しています.  
*postgres のインストールやユーザの作成が済んでいる場合はこのセクションは飛ばしてください.*

まずは postgres をインストールします.
```
$ brew install postgresql
```
続いて, postgres を起動しユーザを作成します.
```
$ postgres -D /usr/local/var/postgres
(別タブで)
$ psql postgres
postgres=# CREATE USER ユーザ名 WITH CREATEDB
```

#### .env ファイルについて
*クライアントIDやトークンの管理に .env ファイルを使用しています. はじめに, 管理者(Yohei Hasegawa)から .env ファイルを受け取ってください.*  

.env ファイルの値を設定します. 該当項目は以下の4つです.
- DATABASE_URL_LOCAL: ローカルの postgres の host を設定してください(デフォルトで 127.0.0.1 です).
- DATABASE_PORT: ローカルの postgres のポート番号を設定してください(デフォルトで 5432 です).
- DATABASE_USER: ローカルの postgres のユーザ名を設定してください(先程作成したユーザもしくは CREATEDB 権限のあるユーザを指定してください).
- DATABASE_PASSWORD: ローカルの postgres のパスワードを設定してください.

*.env ファイルは brains_slack_bot/ 直下においてください.*

#### プロジェクトのセットアップ
必要なモジュールのインストールと DB のセットアップを行います.  

はじめに, ローカルで postgres を起動します.
```
$ postgres -D /usr/local/var/postgres
```

その後以下のコマンドを実行してください.  
```
$ npm run setup
```

#### 動作確認
Botの立ち上げコマンドは以下の通りです.
```
npm start
```

動作確認は, Bot を立ち上げた上で, Slack BrainsTsukuba Team でこの Bot をメンションするか, DM で何か適当なコマンドを送信してください.
```
(Slack @BrainsBot がいるチャンネルで)
@BrainsBot brains get joinmessage

(Slack @BrainsBot DM で)
brains get joinmessage
```
正常に動作していれば, 応答が Heroku とローカルの2つ来ます.

#### 開発を始める際の注意点
開発を始める前に, Slack BrainsTsukuba Team の #brains_bot でどうような機能を追加/修正するかを共有してください.  
機能に関する仕様策定もこのチャンネルで行います.

実際に開発する際は, develop ブランチから feature/ もしくは fix/ ブランチを切ってから作業を行ってください.  
基本的に, ブランチ名は作業内容を一言で表すような名前にしてください.  
`ex. feature/add_hoge_command`

Pull Request を Open する際は, テンプレートに従って必要項目を記入してください.  
また, Reviewiers には HasegawaYohei を指定してください.  
マージは Reviewer が行います.


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
    super(inputData, hearContext, []);
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