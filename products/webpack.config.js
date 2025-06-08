const HtmlWebpackPlugin = require('html-webpack-plugin');   //this plugin simplifies the creation of HTML files to serve your webpack bundles.

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            // so this plugin is gonna take a look at whatever files are coming out of our webpack process, it's going to find those 
            // file names and then add approriate script tags automatically behind the scenes to the html file.
        })
    ]
};