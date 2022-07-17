const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
     entry: "./index.ts",

     target: "node",
     output: {
          path: path.resolve(__dirname, "dist"),
          filename: "index.js",
     },
     resolve: {
          extensions: [".ts", ".js"],
     },
     module: {
          rules: [
               {
                    test: /\.ts$/,

                    use: ["ts-loader"],
               },
          ],
     },

     plugins: [
          new CopyPlugin({
               patterns: [
                    { from: "prisma", to: "./" },
                    { from: ".env", to: "./" },
                    { from: "client/build/", to: "./public" },

                    { from: "node_modules/.prisma/client/query_engine-windows.dll.node", to: "./" },
               ],
          }),
     ],

     // externals: [nodeExternals()],
};
