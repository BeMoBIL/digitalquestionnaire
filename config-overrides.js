/* config-overrides.js */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

// // webpack config
// var publicUrl = '/my-custom-url';

// module.exports = {
//   output: {
//     // ...
//     publicPath: publicUrl + '/',
//   },
//   // ...
//   plugins: [
//     // Generates an `index.html` file with the <script> injected.
//     new HtmlWebpackPlugin({
//       inject: true,
//       template: path.resolve('public/index.html'),
//     }),
//     // Inlines chunks with `runtime` in the name
//     new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime/]),
//     // ...
//   ],
//   // ...
// };

module.exports = function override (config, env) {
    console.log(config.plugins);
    // config.plugins.push([
    //     // Generates an `index.html` file with the <script> injected.
    //     new HtmlWebpackPlugin({
    //       inject: true,
    //       template: path.resolve('public/index.html'),
    //     }),
    //     // Inlines chunks with `runtime` in the name
    //     new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime/]),
    //     // ...
    //   ]);
    // console.log(config.plugins);
    console.log(config.plugins[1].options);
    // config.plugins.InlineChunkHtmlPlugin.tests = [ /.js/]
    // console.log(config.plugins.InlineChunkHtmlPlugin.tests);
    return config;
}