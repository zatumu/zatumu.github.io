---
slug: "memo-VisualStudioCode"
mainPhoto: ""
illust: false
posted: "2023-10-12"
updated: "2023-10-12"
title: "VisualStudioCodeの環境変数を設定したい"
tags:
  - "メモ"
  - "PCの設定"
  - "VisualStudioCode"
extract: "複数のパソコンで環境を同期して使っているので、環境変数などの設定方法をメモしておきたい。"
---

[Visual Studio Codeの設定「虎の巻」：IDE編](https://atmarkit.itmedia.co.jp/ait/articles/1708/23/news026.html) を参考にVisual Studio Code（以下VS Code）で環境変数などを設定するためのメモ書き。

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
- ［ファイル］－［基本設定］－［設定］（macOSでは［Code］－［基本設定］－［設定］）からも設定できる