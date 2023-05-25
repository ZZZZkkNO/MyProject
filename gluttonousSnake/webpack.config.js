//引入path
const path = require('path')
//引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
    //设置模式
    mode: 'production',
    //入口文件
    entry: './src/index.ts',

    //打包文件配置
    output: {
        //输出路径
        path: path.resolve(__dirname, 'dirt'),
        //打包文件名
        filename: 'bundle.js',
        //环境配置
        environment: {
            arrowFunction: false,
            const: false
        }
    },

    //模块配置
    module: {
        rules: [
            //处理ts文件
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: {
                                            'chrome': '88'
                                        },
                                        "corejs": '3',
                                        'useBuiltIns': 'usage'
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node-module/
            },
            //处理less文件
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },

    //注册插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    //扩展模块
    resolve: {
        extensions: ['.ts', '.js', '.less']
    }
}