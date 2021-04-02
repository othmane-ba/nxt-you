const webpack = require("webpack");

module.exports = {
    mode: "development",
    output: {
        filename: 'all.min.js',
    },
    externals: {
        jquery: 'jQuery',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
        ],
    },
};
