import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

const host = process.env.VITE_HOST || '127.0.0.1';
const port = parseInt(process.env.VITE_PORT || '5173');

export default defineConfig({
  server: {
    host,   // ここを localhost から 0.0.0.0 に変更
    port,        // ポート番号を固定（変更可）
    strictPort: true,  // ポートが既に使われていたらエラーにする
    origin: process.env.CODESPACES
        ? `https://${process.env.CODESPACE_NAME}-${port}.app.github.dev`
        : undefined,
},
      plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
});
