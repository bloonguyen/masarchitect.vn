var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const nodeExternals = require('webpack-node-externals');

//Thư mục sẽ chứa tập tin được biên dịch
var BUILD_DIR = path.resolve(__dirname, 'public/bundle');
//Thư mục chứa dự án - các component React
var APP_DIR = path.resolve(__dirname, 'client');
var ENV = process.env.NODE_ENV;
var debug = process.env.NODE_ENV !== "production";

process.noDeprecation = true;

var config = {
    entry: path.resolve(__dirname, 'src/server/index.js'),
    target:'node',
    externals: [nodeExternals()],
    output: {
        path: BUILD_DIR,
        filename: 'server.js',
        publicPath: '/bundle/',
        libraryTarget: 'commonjs2'
    },
    plugins: (!debug) ? [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'LOGGER_ENV': JSON.stringify(ENV),
                "window": JSON.stringify("object")
            }
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /vi|en-ie|ja|zh-cn/),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            },
            sourceMap: true,
            minimize: true
        }),
        new webpack.ProvidePlugin({'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'}),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor1','vendor2','vendor3','vendor4','vendor5','vendor6','vendor7'],
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest'
        // }),
        // new HtmlWebpackPlugin({
        // filename: __dirname + '/views/root.ejs',
        // template: __dirname + '/views/template/root.ejs',
        // inject: 'body',
        // })
    ] : [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'LOGGER_ENV': JSON.stringify(ENV),
                "typeof window": JSON.stringify("object")
            }
        }),
        new webpack.ProvidePlugin({'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'}),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['vendor1','vendor2','vendor3','vendor4','vendor5','vendor6','vendor7'],
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest'
        // }),
        // new HtmlWebpackPlugin({
        // filename: __dirname + '/views/root.ejs',
        // template: __dirname + '/views/template/root.ejs',
        // inject: 'body',
        // })
    ],
    resolve: {
        unsafeCache: true,
        alias: {
            client: path.resolve(__dirname,'client')
        }
    },
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'isomorphic-style-loader'},
                    { loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                            importLoaders: 1,
                        }
                    },
                ]
            }
        ]
    },
};

module.exports = config;
