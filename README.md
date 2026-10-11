# 本データ管理API

## 1. 概要
本のデータを管理するためのAPIを作成しました。APIの学習のために作成しました。
DBは作成しておらず、server.jsファイルの中に本のデータを配列としてまとめた変数を用意しています。
サーバーを再起動した際はデータはリセットされます。

## 2. 実装した機能
### GET
本のデータ一覧を確認する。
### POST
本のデータ一覧に新しい本のデータを追加する。
### PUT
データ内の一冊の本のデータを、他の本のデータに変更する。
### DELETE
データないの一冊の本のデータを削除する。

## 3. 使用技術
- Node.js
- Express
- Swagger UI

CIについて
GitHub actionsを用いて、mainブランチへのpush時やPR時に以下のチェックが自動で実行される。
- 実行環境の準備（Node.jsのセットアップ、依存関係のインストール）
- Prettier：インデントやスペース、改行などのコードの文法をチェックする
- ESlint：使っていない変数や関数の定義のミスなど、コードの問題やルール違反をチェックする

## 4. APIの使用方法
### リポジトリを取得する
以下を入力してください。
```bash
git clone https://github.com/Yoichiro8552/APIpractice
cd APIpractice
```

### ライブラリをインストールする
以下を入力してください。
```bash
npm install
```

### APIサーバーを起動する
以下を入力してください。
```bash
npm start
```

以下のURLを開いてください。
```bash
http://localhost:3000/api-docs
```

### ４機能の利用方法
- GET

try it outを押して、Executeを押す。

- POST
  
try it outを押す。
titleとauthorを追加したい本のデータに変更する。
Executeを押す。

- PUT
  
try it outを押す。
変更したい本のIDの数字を入力する。
titleとauthorを変更したい本のデータに変更する。
Executeを押す。

- DELETE
  
try it outを押す。
削除したい本のIDの数字を入力する。
Executeを押す。
