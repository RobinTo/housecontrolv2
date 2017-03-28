const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development",
    allChunks: true
});

module.exports = {
    context: __dirname,
    entry: [
        'babel-polyfill',
        './src/index.js',
    ],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true,
    },
    module: {
        rules: [
            {
                include: path.resolve(__dirname, 'src'),
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                include: path.resolve(__dirname, 'src'),
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        },
                        {
                            loader: "sass-loader"
                        },
                    ],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            comments: false
        }),
        extractSass
    ]
}
