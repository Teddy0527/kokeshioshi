# こけし推し ブランドサイト

Next.js (App Router) + Tailwind CSS を用いたブランドサイトの初期実装です。要求仕様に沿ってトップ・各コンテンツページ・プロダクト詳細・利用シーン・問い合わせフォームなどを作成しています。

## セットアップ

```bash
npm install
npm run dev
```

※ 初回セットアップ時は `.env` を `.env.local` にコピーし、SMTP 情報を設定してください。

## 主要フォルダ

- `src/app/` … 各ページ (`/`, `/about`, `/products`, `/products/[slug]`, `/story`, `/usage`, `/contact`, `/faq`)
- `src/data/` … プロダクト・ストーリー・FAQ などの静的データ
- `src/components/` … ヘッダー、フッター、問い合わせフォーム、プロダクトカード等の再利用コンポーネント
- `src/app/api/contact/route.ts` … フォーム送信を SMTP で処理する API ルート

## 環境変数

`.env.example` を参照して `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO` を設定してください。

## 開発メモ

- カラーパレット・フォントファミリーを `tailwind.config.ts` に定義
- 画像は `public/images` にプレースホルダー SVG を配置
- ルーティングは Next.js App Router の静的生成 (`generateStaticParams`) を使用
- レイアウトやコピーは要求仕様の「後推し」「静かな佇まい」を意識してシンプルに構成
