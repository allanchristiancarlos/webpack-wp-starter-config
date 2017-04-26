const path = require('path');
const themeDir = path.resolve(__dirname, 'wp-content/themes/twentyseventeen');
const assetsDir = themeDir + '/assets/';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: assetsDir + 'js/app.js'
    },

    output: {
        path: themeDir + '/dist',
        filename: 'js/[name].js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: '',
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: '',
                    use: 'css-loader!less-loader'
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            disable: process.env.NODE_ENV == "development"
        })
    ],

    resolve: {
        extensions: ['.js']
    }
}