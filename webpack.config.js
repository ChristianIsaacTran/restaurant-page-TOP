const path = require("path"); //Used to define an absolute path always to the "dist" folder when the bundle is output.
//this "path" method is recommended as the safest option to define an absolute path.
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development", //What mode we are in (production, development, etc.)
    entry: "./src/script.js", //"entry point" which is the highest on the dependency graph for imported files
    output: {
        filename: "script.js", //The output controls where the bundle's js is going and what the name of the bundled js is going to be.
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map", //source map, used with webpack server to link errors to the right source.
    devServer: {
        watchFiles: ["./src/index.html"], //Since webpack server only tracks changes to js files, we have to tell it manually to watch html file as well.
    },
    plugins: [
        new HtmlWebpackPlugin({ //html webpack, to bundle our html file together
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i, //Handling css files and stylings, also handles images if we want to add them into our css with url().
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, //Handling images in javascript files (no install required)
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i, //Handling fonts (no install required)
                type: 'asset/resource',
              },
            {
                test: /\.html$/i, //Handling in HTML img tags
                loader: "html-loader",
            },
        ],
    },
};