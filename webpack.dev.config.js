var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
        detail: './src/detail.js',
        center: './src/center.js',
    },
    output: {
        path: '/dist',
        filename: 'bundle.[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.scss']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react'],
                cacheDirectory: true
            },
            exclude: /node_modules/
        }, {
            test: /\.jsx$/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react'],
                cacheDirectory: true
            },
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass?outputStyle=expanded&' +
                'includePaths[]=' +
                (path.resolve(__dirname, './node_modules'))
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
        })
    ]
};