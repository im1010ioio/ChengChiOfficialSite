import { defineConfig } from 'vite';

export default defineConfig({
  // 確保 build 時會進行 CSS code-splitting 並輸出獨立的 CSS 檔案
  build: {
    cssCodeSplit: true,
    // 自訂輸出：把 CSS 輸出到固定路徑 `css/style.css`，其餘資產維持 hash 命名
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo && assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/style.css';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
});
