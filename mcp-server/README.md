# Vercel Deploy MCP Server

このMCPサーバーは、Vercelへのデプロイを自動化するためのツールを提供します。

## 機能

- **deploy_to_vercel**: プロジェクトをVercelにデプロイします（本番環境またはプレビュー環境）
- **check_deployment_status**: 最新のデプロイメント状況を確認します
- **build_project**: プロジェクトをビルドしてエラーがないか確認します

## セットアップ

### 1. 依存関係のインストール

```bash
cd mcp-server
npm install
```

### 2. Claude Codeへの設定

Claude Codeの設定ファイル（通常は `~/.config/claude-code/mcp.json`）に以下の設定を追加してください：

```json
{
  "mcpServers": {
    "vercel-deploy": {
      "command": "node",
      "args": ["/Users/kohteddy/Desktop/こけしnew/mcp-server/index.js"]
    }
  }
}
```

### 3. Claude Codeの再起動

設定を反映させるために、Claude Codeを再起動してください。

## 使用方法

Claude Codeで以下のようにMCPツールを呼び出せます：

### プレビューデプロイ

```
deploy_to_vercel({ production: false })
```

### 本番デプロイ

```
deploy_to_vercel({ production: true })
```

### デプロイ状況の確認

```
check_deployment_status()
```

### ビルドの実行

```
build_project()
```

## 注意事項

- Vercel CLIがインストールされている必要があります
- Vercelにログインしている必要があります（`vercel whoami`で確認）
- プロジェクトルートは自動的に検出されます
