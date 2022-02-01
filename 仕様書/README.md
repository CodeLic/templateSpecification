# 仕様書のマークダウン

[🔗 マークダウン記法リンク 1](https://qiita.com/tbpgr/items/989c6badefff69377da7)

[🔗 マークダウン記法リンク 2](https://qiita.com/Blueman81/items/72ca43681d16d44e21ad)

```powershell
npm i -g @codelic/codelic-cli
```

global へインストール後 codelic コマンドが使えるようになる。

github に定義している.

[https://github.com/CodeLic/codelic-cli](https://github.com/CodeLic/codelic-cli)

## コマンド集

```powershell
codelic create .<ターゲットのディレクトリ>
```

今のディレクトリにウェブアプリケーションを作成するコマンド

その後分岐していく

## 要件定義

- firebase の基本の設定を自動で
- 基本的なコードリックで使用するようなテンプレートを引っ張ってきて自動で配置
- Quasar の基本設定
- esLint の基本設定
- prettier の基本設定
- 選択したものがアプリの場合は capacitor の設定も自動化
- 開発時の firebase emulator の設定も初期設定時に同時に自動化
- dev コマンドで設定時の firebase emulator も自動で立ち上げるてテストシミュレート
- CLI コマンドでテストを自動実行

## 目的

- 制作時間の効率化/自動化
