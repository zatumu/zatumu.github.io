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
# Macでも使える
公式サイトからダウンロードしよう。  
[MetaTrader4](https://www.metatrader4.com/ja/download)
## Mac版で多くの場合発生しているであろう文字化けを直そう

`./アプリケーション/MetaTrader4/パッケージ内容を標示/contents/share/wine/share/wine/fonts/`  
  にmsgothic.ttcを配置すると解決できる。デフォルトの設定がMSゴシックらしい。もしかしたらttcの和文フォントの名前を変更してみても解決できるかも。

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

# メモ

- [いつも表示するチャートをテンプレートにしてデフォルトにしたい](https://mt4template.jugem.jp/)  
  チャート作る→定型として保存する→名前を「default.tpl 」にする