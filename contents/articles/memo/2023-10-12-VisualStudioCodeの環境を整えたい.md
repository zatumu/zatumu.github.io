---
slug: "memo-VisualStudioCode"
mainPhoto: ""
illust: false
posted: "2023-10-12"
updated: "2023-10-12"
title: "VisualStudioCodeの環境を整えたい"
tags:
  - "メモ"
  - "PCの設定"
  - "VisualStudioCode"
extract: "複数のパソコンで環境を同期して使っているので、環境変数などの設定方法をメモしておきたい。"
---

[Visual Studio Code の設定「虎の巻」：IDE 編](https://atmarkit.itmedia.co.jp/ait/articles/1708/23/news026.html) を参考に Visual Studio Code（以下 VS Code）で環境変数などを設定するためのメモ書き。

# 設定ファイルについて

- ユーザー設定とワークスペース設定のふたつが基本的な設定ファイル
- ユーザー設定について
  - 以下のディレクトリに「setting.json」というファイル名で保存される
    > Windows： %APPDATA%\Code\User  
    > macOS： $HOME/Library/Application Support/Code/User  
    > Linux： $HOME/.config/Code/User
- ワークスペース設定について
  - ワークスペースの最上位ディレクトリの「.vscode」に「setting.json」で保存されている
  - ユーザー設定より優先される
  - マルチルートワークスペース（複数のディレクトリをひとつのワークスペースで開いている場合）は
    - マルチルートワークスペース全体の設定は「.code-workspace」に保存される
    - 個別のディレクトリの設定は前述の通り保存され、ほかのディレクトリには影響を及ぼさない
- ［ファイル］－［基本設定］－［設定］（macOS では［Code］－［基本設定］－［設定］）からも設定できる

# マークダウンから pdf を生成するの巻

プラグインを使う・設定で見た目を整える。  
[【Visual Studio Code】Markdown PDF のスタイル(CSS)を変える方法](https://h-s-hige.hateblo.jp/entry/20190405/1554467885)

- ワークスペースをつくる
- ワークスペースに設定を書く（上記の記事を参照しよう）
  - ヘッダーフッターの設定はワークスペースの設定ファイルにかく
  - 読み込む CSS ファイルを設定する
    ここまではいいんだけど、その設定を各 PC で共有する方法がわからない。

# jsx で emmet を使いたい

setting.json に下記を追加する。

```
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
     }
```
[EmmetをJSX内で利用する方法(VSCode)](https://qiita.com/rei67/items/f19983a755998cee6bef)

# そのほか参考

- [使える変数](https://code.visualstudio.com/docs/editor/variables-reference)
- [VSCode で生産性を上げる](https://zenn.dev/ultrasupara/articles/174429511504c7)
