ChengChi Official Site — Vite + SCSS 範例

快速開始

```bash
# 進入專案目錄
cd /Users/chenyilin/Documents/ShinYiLian/心意連專案/ChengChiOfficialSite

# 安裝開發依賴（包含 vite 與 sass）
npm install

# 開發伺服器（開發時使用）
npm run dev

# 建置靜態檔案
npm run build

# 在本機預覽建置結果
npm run preview
```

說明
- 已加入 `vite` 與 `sass`（在 `package.json` 的 `devDependencies`）。
- `src/main.js` 會 import `src/styles/main.scss`，Vite + `sass` 會自動處理 SCSS 編譯。

- Build 輸出：執行 `npm run build` 時會在 `dist/assets/` 產生獨立的 CSS 檔案（例如 `index-<hash>.css`）。

- Build 輸出：執行 `npm run build` 時會在 `dist/assets/` 產生獨立的 CSS 檔案（例如 `index-<hash>.css`）。

Tailwind CSS

要使用 Tailwind，你需要安裝開發依賴，然後就可以在 `src/styles/tailwind.css` 使用 Tailwind 指令。

安裝（開發機器上執行）：

```bash
npm install -D tailwindcss postcss autoprefixer
```

已包含範例設定檔 `tailwind.config.cjs` 與 `postcss.config.cjs`，以及 `src/styles/tailwind.css`。在 `src/main.js` 已經 import 了 `tailwind.css`，所以啟動 dev 或 build 後會自動編譯 Tailwind 樣式。

如需使用 `TypeScript`、前端框架或其他插件，我可以幫你再擴充。