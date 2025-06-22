const HtmlWebpackPlugin = require('html-webpack-plugin');   //this plugin simplifies the creation of HTML files to serve your webpack bundles.
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// this plugin allows us to share code between different webpack builds, so that we can create micro-frontends or share components between different applications.

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFedarationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap.js', // this is the file that we want to expose to the world, so that other applications can use it.
            },
            shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            // so this plugin is gonna take a look at whatever files are coming out of our webpack process, it's going to find those 
            // file names and then add approriate script tags automatically behind the scenes to the html file.
        })
    ]
};