import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
   const isDev = options.mode === 'development';

   const assetLoader = {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
   };

   const svgrLoader = {
      test: /\.svg$/i,
      use: [
         {
            loader: '@svgr/webpack',
            options: {
               icon: true,
               svgoConfig: {
                  plugins: [
                     {
                        name: 'convertColors',
                        params: {
                           currentColor: true,
                        },
                     },
                  ],
               },
            },
         },
      ],
   };

   const postCssLoader = {
      test: /\.css$/i,
      use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
   };

   const tsLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   };

   return [assetLoader, postCssLoader, tsLoader, svgrLoader];
}
