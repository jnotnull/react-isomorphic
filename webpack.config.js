var path = require('path');

module.exports = {
    entry: './src/client.js',
    output: {
        path: '/dist/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.scss']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx' },
            { test: /\.json$/, loader: 'json' },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?outputStyle=expanded&' +
                  'includePaths[]=' +
                    (path.resolve(__dirname, './node_modules'))
            }
        ]
    }
};
