var path = require('path');

var themeDir = path.resolve(__dirname, 'wp-content/themes/twentyseventeen');

module.exports = {
    entry: {
        app: themeDir + '/assets/js/app.js'
    },

    output: {
        path: themeDir + '/dist',
        filename: 'js/[name].js'
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loaders: 'style-loader!css-loader!less-loader'
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

    resolve: {
        extensions: ['.js']
    }
}