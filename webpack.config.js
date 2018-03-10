const path = require("path");
const webpack = require("webpack");
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: ["./src/index.js"],
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js"
	},
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
				test: /\.css$/,
				include: /node_modules/,
				use: [
					"style-loader",
					"css-loader",
					'postcss-loader'
				]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	}/*,
	plugins: [
		new webpack.LoaderOptionsPlugin({
		  options: {
		    postcss: [
		      autoprefixer(),
		    ]
		   }
		})
	]*/,
	resolve: {
	    extensions: ['.js', '.jsx', '.json']
	},
	mode: 'development',
}
