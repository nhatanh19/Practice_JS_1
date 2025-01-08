import {
    defineConfig
} from 'vite';
import path from 'path';

export default defineConfig({
    root: './src',
    // Base URL cho production build
    base: '/',

    // Cấu hình server development
    server: {
        port: 3000,
        open: true, // Tự động mở browser
        cors: true, // Cho phép CORS
    },

    // Cấu hình build
    build: {
        outDir: 'dist', // Thư mục output khi build
        assetsDir: 'assets', // Thư mục chứa assets
        sourcemap: true, // Generate sourcemaps
    },

    // Cấu hình resolve để import dễ dàng hơn
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@components': path.resolve(__dirname, './src/js/components'),
            '@utils': path.resolve(__dirname, './src/js/utils'),
        },
    },

    // Cấu hình CSS/SCSS
    css: {
        devSourcemap: true, // Sourcemap cho CSS trong development
        preprocessorOptions: {
            scss: {
                additionalData: `
          @import "@styles/scss/abstracts/_variables.scss";
          @import "@styles/scss/abstracts/_mixins.scss";
          @import "@styles/scss/abstracts/_functions.scss";
        `,
                // Cho phép import relative paths
                includePaths: ['node_modules', 'src/styles']
            }
        }
    },

    // Cấu hình plugins (nếu cần)
    plugins: [],
});