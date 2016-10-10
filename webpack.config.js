/* eslint-disable prefer-template */
var webpack = require('webpack');
var path = require('path');

var env = process.env.NODE_ENV || 'development';
var platform = process.env.PLATFORM || 'browser';

var config = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'main.js'
    },
    resolve: {
        root: path.resolve('src')
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                loader: 'babel!react-svg?' + JSON.stringify({
                    svgo: {
                        floatPrecision: 2
                    }
                })
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(env),
                'PLATFORM': JSON.stringify(platform),
                'API_ORIGIN': JSON.stringify(process.env.API_ORIGIN),
                'API_PREFIX': JSON.stringify(process.env.API_PREFIX),
            }
        })
    ]
};

module.exports = config;
