import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
      },
   },
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: (content, resourcePath) => {
               // Проверка, если файл глобальный (например, App.scss)
               if (/App\.scss$/.test(resourcePath)) {
                  return `
              @import "./variables/utils/mixin.scss";
              @import "./variables/utils/variables.scss";
              ${content}
            `;
               }

               // Для всех остальных SCSS файлов (например, модульных стилей)
               return `
            @import "app/styles/variables/global.scss";
            @import "src/app/styles/themes/dark.scss";
            @import "src/app/styles/themes/light.scss";
            @import "src/app/styles/mixins/mixins.scss";
            ${content}
          `;
            },
         },
      },
   },
   plugins: [react(), svgr()],
});
