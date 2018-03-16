const path = require("path");
const webpack = require("webpack");
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: [
		"./src/index.js"
	],
	output: {
		path: path.resolve(__dirname, "../public/"),
		filename: "bundle.js"
	},
	plugins: [
    new MiniCssExtractPlugin({
			filename: "styles.css"
    })
  ],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					"babel-loader"
				]
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: [
					"babel-loader"
				]
			},
			{
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
					"sass-loader"
        ]
      }
		]
	},
	resolve: {
	    extensions: ['.js', '.jsx', '.json']
	},
	mode: 'production'
}
