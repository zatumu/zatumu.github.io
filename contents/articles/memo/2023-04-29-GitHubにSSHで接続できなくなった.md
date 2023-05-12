---
slug: "trouble-github-ssh"
mainPhoto: ""
illust: false
posted: "2023-04-29"
updated: "2023-04-29"
title: "GitHubにSSHで接続できなくなった"
tags: 
- "覚書"
- "GitHub"
extract: "突然接続できなくなって焦ったけど、GitHubでトラブルがあったらしい。"
---
[「GitHub」のRSA SSH秘密鍵が漏洩、公開リポジトリに短期間露出](https://forest.watch.impress.co.jp/docs/news/1488524.html)  
が原因で自分の公開鍵が使えなくなったのかな。  
なので、手順を調べてSSHを再設定した。
- [GithubでSSH認証に失敗するときのリセット方法](https://qiita.com/muscle_eng/items/9e6633c57fc9c36ae268)
  1. GitHubの公開鍵を削除
  1. /.sshディレクトリの中身を削除
  1. 新たに公開鍵・秘密鍵を作成
  1. GitHubに新しい公開鍵を登録
  1. 接続テスト
- [Mac GitHub SSH接続設定](https://qiita.com/ucan-lab/items/e02f2d3a35f266631f24#_reference-7cbea668d512073f0df4)
- [Permission denied (publickey) の 対処方法はだいたいこれ](https://ormcat.net/blog/20210509_github-denied-publickey/)
エラーがおきて困った時は、ログの内容をDeeplなどで翻訳するか、キーになってそうな箇所を検索するかで大体解決できるので、焦らないようにしよう自分。
