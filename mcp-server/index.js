#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// プロジェクトのルートディレクトリを取得
const PROJECT_ROOT = path.resolve(__dirname, "..");

class VercelDeployServer {
  constructor() {
    this.server = new Server(
      {
        name: "vercel-deploy-server",
        version: "1.0.0",
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    this.setupErrorHandling();
  }

  setupErrorHandling() {
    this.server.onerror = (error) => {
      console.error("[MCP Error]", error);
    };

    process.on("SIGINT", async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: "deploy_to_vercel",
          description:
            "プロジェクトをVercelにデプロイします。production環境にデプロイするか、preview環境にデプロイするかを選択できます。",
          inputSchema: {
            type: "object",
            properties: {
              production: {
                type: "boolean",
                description:
                  "本番環境にデプロイする場合はtrue、プレビュー環境にデプロイする場合はfalse",
                default: false,
              },
            },
          },
        },
        {
          name: "check_deployment_status",
          description: "最新のVercelデプロイメントのステータスを確認します。",
          inputSchema: {
            type: "object",
            properties: {},
          },
        },
        {
          name: "build_project",
          description: "プロジェクトをビルドしてエラーがないか確認します。",
          inputSchema: {
            type: "object",
            properties: {},
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      try {
        const { name, arguments: args } = request.params;

        switch (name) {
          case "deploy_to_vercel": {
            const { production = false } = args;
            const deployCommand = production
              ? "vercel --prod --yes"
              : "vercel --yes";

            try {
              const output = execSync(deployCommand, {
                cwd: PROJECT_ROOT,
                encoding: "utf-8",
              });

              return {
                content: [
                  {
                    type: "text",
                    text: `Vercelへのデプロイが成功しました！\n\n${output}`,
                  },
                ],
              };
            } catch (error) {
              return {
                content: [
                  {
                    type: "text",
                    text: `デプロイ中にエラーが発生しました:\n${error.message}\n${error.stdout || ""}`,
                  },
                ],
                isError: true,
              };
            }
          }

          case "check_deployment_status": {
            try {
              const output = execSync("vercel ls --limit 5", {
                cwd: PROJECT_ROOT,
                encoding: "utf-8",
              });

              return {
                content: [
                  {
                    type: "text",
                    text: `最新のデプロイメント一覧:\n\n${output}`,
                  },
                ],
              };
            } catch (error) {
              return {
                content: [
                  {
                    type: "text",
                    text: `デプロイメントステータスの取得中にエラーが発生しました:\n${error.message}`,
                  },
                ],
                isError: true,
              };
            }
          }

          case "build_project": {
            try {
              const output = execSync("npm run build", {
                cwd: PROJECT_ROOT,
                encoding: "utf-8",
              });

              return {
                content: [
                  {
                    type: "text",
                    text: `ビルドが成功しました！\n\n${output}`,
                  },
                ],
              };
            } catch (error) {
              return {
                content: [
                  {
                    type: "text",
                    text: `ビルド中にエラーが発生しました:\n${error.message}\n${error.stdout || ""}`,
                  },
                ],
                isError: true,
              };
            }
          }

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `エラーが発生しました: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Vercel Deploy MCP server running on stdio");
  }
}

const server = new VercelDeployServer();
server.run().catch(console.error);
