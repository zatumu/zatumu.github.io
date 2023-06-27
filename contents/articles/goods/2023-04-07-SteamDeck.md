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

# EpicGamesで遊ぶ
ただでデスストランディングがもらえたので、遊びたいので調べた。  
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


# めも
- [Dualshock 4 Gyro aim on deck](https://www.reddit.com/r/SteamDeck/comments/118yhg4/dualshock_4_gyro_aim_on_deck/)
