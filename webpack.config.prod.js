const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    mode: "production",
    output: {
        filename: 'all.min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
        ]
    },
    optimization: {
        concatenateModules: true,
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: 4,
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
};
