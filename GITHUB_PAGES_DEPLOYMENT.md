# GitHub Pages 部署指南

本指南說明如何將國立勤益科技大學資訊管理系網站部署至 GitHub Pages。

## 快速開始

### 方法 1：自動部署（推薦）

1. **建立 GitHub 倉庫**
   - 在 GitHub 上建立新倉庫，名稱為 `mis-redesign` 或您偏好的名稱
   - 選擇 Public 倉庫（GitHub Pages 需要）

2. **推送代碼**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: NCUT MIS website redesign"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/mis-redesign.git
   git push -u origin main
   ```

3. **配置 GitHub Pages**
   - 進入倉庫的 Settings → Pages
   - 選擇 Source: Deploy from a branch
   - 選擇 Branch: main，Folder: / (root)
   - 點擊 Save

4. **啟用自動部署**
   - GitHub Actions 工作流程會自動運行
   - 檢查 Actions 標籤查看部署進度
   - 部署完成後，網站將在 `https://YOUR_USERNAME.github.io/mis-redesign/` 上線

### 方法 2：手動部署

如果您想手動部署已構建的文件：

1. **構建網站**
   ```bash
   pnpm install
   pnpm build
   ```

2. **複製構建文件**
   ```bash
   # 構建輸出位於 dist/public/ 目錄
   cp -r dist/public/* /path/to/github-pages-repo/
   ```

3. **推送至 GitHub**
   ```bash
   cd /path/to/github-pages-repo/
   git add .
   git commit -m "Deploy website"
   git push origin main
   ```

## 自定義域名

如果您想使用自定義域名（例如 `mis.example.com`）：

1. **在 DNS 提供商配置**
   - 添加 CNAME 記錄指向 `YOUR_USERNAME.github.io`
   - 或按照 GitHub 的說明配置 A 記錄

2. **在 GitHub 配置**
   - 進入倉庫 Settings → Pages
   - 在 Custom domain 欄位輸入您的域名
   - 點擊 Save
   - GitHub 會自動建立 CNAME 文件

## 構建輸出說明

構建完成後，`dist/public/` 目錄包含以下文件：

```
dist/public/
├── index.html              # 主 HTML 文件
├── assets/
│   ├── index-*.css        # 編譯後的 CSS
│   └── index-*.js         # 編譯後的 JavaScript
└── images/
    ├── hero-background.jpg
    ├── department-feature.jpg
    └── career-opportunities.jpg
```

所有文件都已優化並準備好部署。

## 環境變量

如果您需要配置環境變量（例如 API 端點），請：

1. **本地開發**
   ```bash
   # 建立 .env.local 文件
   VITE_API_URL=https://api.example.com
   ```

2. **GitHub Actions 部署**
   - 進入倉庫 Settings → Secrets and variables → Actions
   - 添加所需的環境變量
   - 在 `.github/workflows/deploy.yml` 中引用它們

## 故障排除

### 網站無法加載

- 檢查 GitHub Pages 設置是否正確
- 確認倉庫是 Public 的
- 查看 GitHub Actions 日誌是否有錯誤

### 樣式或圖片無法加載

- 確認所有資源都在 `dist/public/` 目錄中
- 檢查瀏覽器開發者工具的 Network 標籤
- 確認路徑是否正確（相對或絕對）

### 構建失敗

- 確認已安裝所有依賴：`pnpm install`
- 檢查 Node.js 版本是否為 18 或更高
- 查看構建日誌中的錯誤信息

## 更新網站

每次推送至 main 分支時，GitHub Actions 會自動構建並部署新版本。

```bash
# 進行更改
# 提交並推送
git add .
git commit -m "Update website content"
git push origin main

# GitHub Actions 會自動部署
```

## 支持

如有任何問題，請檢查：
- [GitHub Pages 文檔](https://docs.github.com/en/pages)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- 本倉庫的 Issues 部分

## 許可證

本項目採用 MIT 許可證。
