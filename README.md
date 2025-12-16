# Markdown to PDF

マークダウンからPDFを生成するオンラインツールです。

## 機能

- 📝 リアルタイムマークダウンエディタ
- 👁️ リアルタイムプレビュー
- 📄 PDF出力（シンプルな文書スタイル）

## 技術スタック

- **Vite** - ビルドツール
- **React** - UIフレームワーク
- **marked** - マークダウンパーサー
- **html2pdf.js** - PDF生成ライブラリ

## セットアップ

### インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

## GitHub Pagesへのデプロイ

1. リポジトリのSettings > Pagesで、Sourceを「GitHub Actions」に設定（必須）
2. 以下のGitHub Actionsワークフローが自動的にビルドとデプロイを実行します

**注意**: リポジトリ名が`markdown-to-pdf`以外の場合は、`vite.config.js`の`base`パスをリポジトリ名に合わせて変更してください。

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // リポジトリ名に変更
})
```

## 使い方

1. 左側のエディタにマークダウンを入力
2. 右側でリアルタイムプレビューを確認
3. 「PDFを生成」ボタンをクリックしてPDFをダウンロード

## ライセンス

MIT

