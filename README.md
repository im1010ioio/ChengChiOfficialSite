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

如需使用 `TypeScript`、前端框架或其他插件，我可以幫你再擴充。