'use strict';

var path = require('path');
var webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;

var config = {
    entry: {
        app: ['./app/index.js']
    },
    output: { path: path.join(__dirname, 'bundle'), filename: 'index.js' },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {  presets: ['es2015', 'stage-0'] }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    plugins: [],
    resolve: {
        modulesDirectories: ['node_modules', 'app']
    }
};

if (NODE_ENV === 'development') {
    config.watch = true;
    config.watchOptions = {
        aggregateTimout: 100
    };
    config.devtool = 'inline-source-map';
}

if (NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}

module.exports = config;
