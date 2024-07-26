import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import autoprefixer from 'autoprefixer';
import path from 'path';
// import VitePluginSsh from 'vite-plugin-ssh';

export default defineConfig(() => {
    return {
        plugins: [
            ViteImageOptimizer({
                jpg: {
                    quality: 80
                },
                jpeg: {
                    quality: 80
                },
            }),
            handlebars({
                partialDirectory: resolve(__dirname, 'src/layout/'),
            }),
            //плагин не умеет создавать на сервере папку проекта - нужно создать папку ручками и указать путь до нее в remotePath
            // VitePluginSsh.default({
            //     host: 'html.webshop.ru',
            //     // port: 22,
            //     username: 'htmlshop',
            //     password: 'L540YD9y',
            //     localPath: 'dist',
            //     remotePath: 'public_html/vite',
            //     // backupFiles: ['assets', 'index.html'], // or ['*']
            // }),
        ],
        build: {
            rollupOptions: {
                //позволяет работать с несколькимим страницами в проекте
                // input: {
                //     main: resolve(__dirname, 'index.html'),
                //     nested: resolve(__dirname, 'nested/index.html'),
                // },

                //убирает хэширование файлов при сборке проекта
                output: {
                    entryFileNames: `assets/[name].js`,
                    chunkFileNames: `assets/[name].js`,
                    assetFileNames: `assets/[name].[ext]`
                }
            },
        },
        css: {
            postcss: {
                plugins: [
                    autoprefixer()
                ]
            }
        },
        resolve: {
            //можно заменять в путях ./src на @ 
            alias: {
                '@': path.resolve(__dirname, './src'),
            }
        }
    };
});