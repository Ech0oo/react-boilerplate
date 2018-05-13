const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env, options) {
    const isProduction = options.mode === 'production';

    const config = {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',
        
        context: path.resolve(__dirname, 'src'),
        entry: [
            './index.js'
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
    
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
    
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        },
        
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: './index.html'
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            hot: true
        }
    };

    return config;
};
