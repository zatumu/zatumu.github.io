---
slug: Invest-MetaTreader4
mainPhoto: ""
posted: 2024-07-07
updated: 2024-07-07
title: FXなどの取引をするための準備を進めるぞ
tags:
  - FX
  - 投資
extract: ""
---
# 困っていること

- 動作が重たい・注文が通らないことが多い  
  →Windows版を使おう

# Macでも使える
公式サイトからダウンロードしよう。  
[MetaTrader4](https://www.metatrader4.com/ja/download)  
ただし、エミュレーター環境なので、動作が重い。Windowsが用意できるならその方が好ましい。
## Mac版で多くの場合発生しているであろう文字化けを直そう

`./アプリケーション/MetaTrader4/パッケージ内容を標示/contents/share/wine/share/wine/fonts/`  
  にmsgothic.ttcを配置すると解決できる。デフォルトの設定がMSゴシックらしい。もしかしたらttcの和文フォントの名前を変更してみても解決できるかも。

# Windowsで使おう

WindowsへMacからリモート操作する。ぱっとみの印象、Mac版で感じたような動作の重さはない。

# 施したい設定

- ○チャートの時間を日本時間にする  
  標準で表示されているものは変更できないらしいのでインジケーターを導入する必要がある
  - [日本時間に変換するMT4/MT5インジケーターを無料公開（時計表示付き）](https://www.fxnav.net/mt4navi/fxnav_japan_time/)
- ~~移動平均線を出す？~~
- ~~一目均衡表を出す？~~
- ○ボリンジャーバンドを出す
- ○平均足をだす  
  始値・終値が平均値（前の足の）になっていてトレンドが視覚的にわかりやすい。
- [擬似マルチタイムフレームのMACD](https://web-jupiter.co.jp/fx-indicator/mtf-macd-mtfmacd/)  
  指定した時間足の倍数で擬似的に長い時間軸のMACDを表示できる（15分→60分なら4倍）

# 注文方法について

自分が使いたいものについて、メモしておく。

## [OCO注文](https://www.oanda.jp/lab-education/blog_mt4/basic/mt4_oco/#all)

異なる二つの注文を同時に予約して、どちらか一方の成立と、もう片方のキャンセルを実現する注文方法。つまり、指値と逆指値を指示しておくということ。  
注文後に、該当の注文情報をクリックして、開いたウィンドウで、指値・逆指値を入力する。  
新規注文時でも同様に指値・逆指値を指定することができる。

## [IFD注文](https://www.oanda.jp/lab-education/blog_mt4/basic/mt4_ifd/#all)

ある価格に達した時に、新規注文と決済注文を同時に発生させる注文方法。注文画面から通貨ペアと決済指値（決済逆指値も指定できる）、数量、購入方法・購入価格を指定する。  

- Buy Limit：現在より低い価格を指定して買う
- Sell Limit：現在より高い価格を指定して売る
- Buy Stop：現在より高い価格を指定して買う
- Sell Stop：現在より低価格を指定して売る

## [トレイリングストップ](https://www.oanda.jp/lab-education/dictionary/traringstop/)

任意の注文を右クリックして、有効化する。MT4上で稼働するため、注文中はMT4が稼働してなくてはならない。  
トレーリングストップは逆指値が有利な方向へ自動的に移動していく注文方法。

# メモ

- [いつも表示するチャートをテンプレートにしてデフォルトにしたい](https://mt4template.jugem.jp/)  
  チャート作る→定型として保存する→名前を「default.tpl 」にする
- サブウィンドウがドッキングしないときは下記のコンフィグファイルを削除する  
  `/Users/ユーザー名/Library/Application Support/net.metaquotes.wine.metatrader4/drive_c/Program Files (x86)/MetaTrader 4/config/terminal.ini`

## 重たいMT4への対策

- ツール→オプション→チャートからヒストリー内の最大バー数・チャートの最大バー数を2000くらいにする
- ニュースをオフにする