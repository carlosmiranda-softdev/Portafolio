const path = require("path");
const BUILD_DIR = path.resolve(__dirname, "./public/build");
const APP_DIR = path.resolve(__dirname, "./client");
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    mode: "production",
    entry: {
        main: APP_DIR + "/index.js"
    },
    output: {
        filename: "bundle.js",
        path: BUILD_DIR
    },
    /* plugins: [
        new BundleAnalyzerPlugin()
    ], */
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192
                    }
                }
            },
            {
                test: /\.svg$/,
                use: {
                    loader: "svg-url-loader",
                    options: {
                        limit: 10000
                    }
                }
            }
        ]
    }
}