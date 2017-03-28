var wallabyWebpack = require('wallaby-webpack');
var webpack = require('webpack');

module.exports = function (wallaby) {

    var webpackPostprocessor = wallabyWebpack({
        // webpack options

        resolve: {
            extensions: ['.js', '.jsx']
        },

        module: {
            rules: [
                {test: /\.json$/, use: ['json-loader']},
            ]
        },

        plugins: [
            new webpack.NormalModuleReplacementPlugin(/\.(gif|png|scss|css)$/, 'node-noop')
        ],

        externals: {
            'react/lib/ExecutionEnvironment' : true,
            'react/lib/ReactContext': true,
            'react/addons' : true,
        }
    });

    return {
        files: [
            {pattern: '**/node_modules/**/*.js', ignore: true},
            {pattern: '**/node_modules/**/*.jsx', ignore: true},
            {pattern: '**/src/**/*.test.jsx', ignore: true},
            {pattern: '**/src/**/*.test.js', ignore: true},
            {pattern: '**/src/**/*.js', load: false},
            {pattern: '**/src/**/*.jsx', load: false},
        ],

        tests: [
            {pattern: '**/node_modules/**/*.js', ignore: true},
            {pattern: '**/node_modules/**/*.jsx', ignore: true},
            {pattern: '**/src/**/*.test.js*', load: false}
        ],

        compilers: {
            '**/*.jsx': wallaby.compilers.babel({
                presets: [
                    "es2015",
                    "react"
                ]
            }),
            '**/*.js': wallaby.compilers.babel({
                presets: [
                    "es2015",
                    "react"
                ]
            }),
        },

        postprocessor: webpackPostprocessor,

        setup: function () {
            window.__moduleBundler.loadTests();
        },
        testFramework: 'mocha'
    };
};