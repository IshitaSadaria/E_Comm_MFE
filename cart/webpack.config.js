const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
    },
    plugins: [
        new ModuleFedarationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/index'
            },
            shared: ['faker']
            // {
            //     faker: {
            //         singleton: true, // Ensures that only one instance of faker is used across all micro-frontends
            //     }
            // }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}