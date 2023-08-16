---
slug: "SteamDeck"
mainPhoto: ""
illust: false
posted: "2023-04-07"
updated: "2023-04-07"
title: "SteamDeckを買った"
tags: 
- "ゲーム"
- "Steam"
- "SteamDeck"
- "UMPC"
extract: "SteamDeck最高！と個人的には思っています"
---
# SteamDeckを買った
そのうちArmoredCore6が発売されるのでSteamDeckを買いました。
おそらく、AAA級タイトルをプレイする体験としてはそこまで良くはないと思う。  
しかし現状は大満足である。  
なぜか。

# SDカードを選ぶ
大変参考になるサイトがあったのでメモしておく。  
[Steam Deck用microSDカード](https://sddb.games/microsd)  
また、[こちらの記事](https://retro-gamer.jp/?p=23426)と中に記載のある動画によると、  
> 毎秒100MB/105MBの速度までしかサポートすることができないそうです。  
らしい。
なので個人的には256GBあたり最高グレードのひとつ下が、手頃な印象がある。  
→512GBを購入した。

# EpicGamesで遊ぶ
ただでデスストランディングがもらえて、遊びたいので調べた。  
結論からいうとできた。  
どうもWindowsとの互換機能を使い、エピックの認証を受けたエピックランチャーと同様の仮想環境からゲームを起動することで遊べるらしい。  
[『Steam Deck』Epicなどの非SteamゲームをSDカードにインストールしてカスタムProtonで動かしてセーブ同期させた](http://hal51.click/game/steamdeck_epic)  
前提としてプロパティ>互換性からProtonを使用する設定が必要。
>１．Epicインストーラーを「非Steamゲームをライブラリに登録」し、以下の起動オプションを設定してインストール。（フォルダは事前に準備しておく）  
>「STEAM_COMPAT_DATA_PATH=/home/deck/.proton/epic %command%」
>２．インストール後、Epicインストーラーのプロパティ→ショートカットにて「リンク先」を「EpicGamesLauncher.exe」に変更。ついでに名称をEpicランチャーに変更。  
>３．Epicランチャーの起動オプションを以下に変更。（2つの起動オプションの間は半角スペース）「STEAM_COMPAT_DATA_PATH=/home/deck/.proton/epic STEAM_COMPAT_MOUNTS=/run/media/mmcblk0p1/ %command%」  
>４．Epicランチャーを起動し、ゲームをSDカードにインストール。
>５．ゲームのexeファイルを「非Steamゲームをライブラリに登録」し、以下の起動オプションを設定。（３と同じ）「STEAM_COMPAT_DATA_PATH=/home/deck/.proton/epic STEAM_COMPAT_MOUNTS=/run/media/mmcblk0p1/ %command%」  
>６．ゲーム毎に必要なProtonを設定する。  
>７．SteamライブラリからEpicのゲームを直接起動して動作確認。

# 内部ストレージを増やすべきか
- [もしかして、全員SSD交換するべきかもしれないSteamDeck](https://yoshives.com/steamdeck-ssd-upgrade/)
- [【画像で解説】Steam DeckでSteam OSを再インストールする方法](https://time-gadget.com/2023/06/05/%E3%80%90%E7%94%BB%E5%83%8F%E3%81%A7%E8%A7%A3%E8%AA%AC%E3%80%91steam-deck%E3%81%A7steam-os%E3%82%92%E5%86%8D%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/)  

大きいゲームをつけたり消したりするとキャッシュが溜まるらしいんんだけど、それが解決できるらしい。  
あとは読み込みが結構早くなる。  
やるべきか。

## やりました
ネジを若干舐めた可能性があるものの、作業は概ね簡単。  
USBメモリからOSをブートするのはすこしドキドキする。
上記リンクとその先に紹介されている記事を参考にするといい。
### 必要なもの
- 任意のSSD（無論SteamDeckの規格に合うもの）
- 16GB以上のUSBメモリ
- USB-CのハブもしくはUSB-Cの変換アダプター  
  個人的には給電機能がついたハブが安心
- WindowsPC  
  ブート用のUSBメモリ作成に必要（Macでも探せばあるかも）


# めも
- [Dualshock 4 Gyro aim on deck](https://www.reddit.com/r/SteamDeck/comments/118yhg4/dualshock_4_gyro_aim_on_deck/)
