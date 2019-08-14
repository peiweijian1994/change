const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const config={
    entry:{
        app:'./src/browser/index.jsx'
    },
    devtool:"inline-source-map",
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: __dirname+"/src/browser/index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test: /\.js|jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: [
                        ["import", {
                            "libraryName": "antd",
                            "libraryDirectory": "es",
                            "style": true
                        }],
                        ["transform-decorators-legacy"],
                        ["transform-class-properties"],
                        [
                            "transform-runtime",
                            {
                                "helpers": false,
                                "polyfill": false,
                                "regenerator": true,
                                "moduleName": "babel-runtime"
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            {
                test:/\.css$/,
                use:[
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },{
                test:/\.less$/,
                use:[
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {loader:"less-loader"}
                ]
            }
        ]
    },
    devServer: {
        contentBase: "./",
        compress: true,
        port: 9000,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
};


module.exports = config;

