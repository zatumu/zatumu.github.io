---
slug: "about-Bluetooth"
mainPhoto: ""
illust: false
posted: "2023-04-14"
updated: "2023-04-14"
title: "Bluetoothについて"
tags:
  - "覚書"
  - "ガジェット"
  - "Bluetoogh"
  - "Switch"
extract: "PC周りの配線を見直すにあたり、Blurtoothについて調べたことのメモ"
---

# やりたかったこと

モニターからの音声の出力と、PC（正確には USB ハブ）からの音声をミックスし、Bluetooth で配信する。

# 調べたこと

上記を実現するにあたり、Bluetooth のプロファイル・コーデックという概念が大事であることを知ったので、調べてみた。

## プロファイル

特定の用途に対して定義された通信規格のセットのことを言うらしい。

- HSP／HFP：片耳デバイス向けに作られたもので、HSP の拡張仕様が HFP らしい
- A2DP：HSP／HFP にはステレオで音声を伝送する機能がないらしく、ステレオヘッドホンを実現するためのプロファイルらしい
  上記 2 つは、一般的にはほとんどの Bluetooth ヘッドセットに備えられているとか。  
  [思い通りにならない Bluetooth、ヘッドセットとヘッドホンは何が違う？](https://xtech.nikkei.com/atcl/nxt/column/18/00095/00005/)

## コーデック

音声データをデジタル信号に変換するための技術で、音声の品質がこれに影響されるとか。  
標準的な仕様は「SBC」で、220ms(±50ms)の遅延が発生するらしい。  
これを読んだときに、ゲームのプレイに影響があるのでは？と私は思ったのだ。

- [Bluetooth コーデックとは？音質・遅延性などの特徴や確認方法を紹介](https://tech-camp.in/note/technology/95036/)
- [ms は何秒か](https://harmonic-sound.com/ms%E3%81%AF%E4%BD%95%E7%A7%92%E3%81%8B/)

## どんな環境なんだろう？

マルチペアリング対応のヘッドセットで、iPhone と任天堂 Swicth に接続していた。  
結論から書くと遅延がある環境で、遅延に気づかずにゲームをしてみたい。  
たしかに、言われてみれば若干音が遅れている気がする（本当にわかっているのか？）。

### Switch のプロファイル・コーデック

- プロファイル：A2DP
- コーデック：SBC
  [Bluetooth® オーディオについて](https://www.nintendo.co.jp/support/switch/accessories/bluetooth_audio.html)

 # やってみた結果
若干の遅延を受け入れてやりたかった環境を作ってみた結果、高い満足度が得られた。
モニターからの音声をBluetoothヘッドセットに受信させると、擬似的にマルチペアリングの台数を増やせているような感覚になるのがGood。
## 使用している機材
- [Shokz OpenRun Pro Mini（ほんとはこれより古いやつだけど）](https://www.amazon.co.jp/%E4%BD%8E%E9%9F%B3%E5%86%8D%E7%94%9F%E5%BC%B7%E5%8C%96%E6%80%A5%E9%80%9F%E5%85%85%E9%9B%BB-DSP%E3%83%8E%E3%82%A4%E3%82%BA%E3%82%AD%E3%83%A3%E3%83%B3%E3%82%BB%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%BB%E3%83%9E%E3%82%A4%E3%82%AF-10%E6%99%82%E9%96%93%E3%81%AE%E9%9F%B3%E6%A5%BD%E5%86%8D%E7%94%9F%E3%81%A8%E9%80%9A%E8%A9%B1-%E5%85%AC%E5%BC%8F%E3%82%B9%E3%83%88%E3%82%A2%E6%AD%A3%E8%A6%8F%E5%93%81-bluetooth5-1/dp/B0BB772PMQ/ref=d_pd_sbs_sccl_3_1/358-0439646-7671744?pd_rd_w=Q21qq&content-id=amzn1.sym.0658137e-f5cd-4a01-8903-013eee01b385&pf_rd_p=0658137e-f5cd-4a01-8903-013eee01b385&pf_rd_r=HX3TC178EVDTEJK51HRZ&pd_rd_wg=e6Clg&pd_rd_r=c8ec6977-d867-443e-a89c-7c5992610b7d&pd_rd_i=B0BB772PMQ&th=1)
- [UGREEN USB オーディオ 変換アダプタ](https://www.amazon.co.jp/gp/product/B01N41607I/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1)
  多分音質がよくないので買い換えるかも。
- [エレコム オーディオミキサー アナログ](https://www.amazon.co.jp/gp/product/B0BZP8B384/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1)
  こちらは音質に不満を感じないのでオヌヌメ。ただし、仕様上ミックスされた音量は小さくなる。
- [UGREEN Bluetooth 5.1 トランスミッター&レシーバー](https://www.amazon.co.jp/gp/product/B099K591CG/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1)
  USBオーディオアダプタと同じメーカーだけど、こちらの音質は普通だと思う。ケーブルは要変更。
- [HDMI切替器、Vilcome 分配器 セレクター](https://www.amazon.co.jp/gp/product/B07CBRLB4M/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1)
  複数のデバイスをHDMIでモニターに繋げたいので買ったけど、とくに問題はない
