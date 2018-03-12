const path = require("path");
const webpack = require("webpack");
const autoprefixer = require('autoprefixer');

function getExternalIp(){
	var address,
	    ifaces = require('os').networkInterfaces();
	for (var dev in ifaces) {
	    ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address: undefined);
	}
	return address;
}

const host = getExternalIp();
const port = 8080;

module.exports = {
	entry: [
		"webpack-dev-server/client?http://" + host + ":" + port,
		"webpack/hot/only-dev-server",
		"./src/index.js"
	],
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
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
	    extensions: ['.js', '.jsx', '.json']
	},
	mode: 'development',
}
