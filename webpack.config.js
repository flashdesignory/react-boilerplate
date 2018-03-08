const path = require("path");
const chalk = require('chalk');

function getExternalIp(){
	var address,
	    ifaces = require('os').networkInterfaces();
	for (var dev in ifaces) {
	    ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address: undefined);
	}
	return address;
}

console.log();
console.log(chalk.green("******************************"));
console.log();
console.log(chalk.cyan("External IP: " + getExternalIp()));
console.log();
console.log(chalk.green("******************************"));
console.log();

module.exports = {
	entry: ["./src/index.js"],
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js"
	},
	devServer: {
		contentBase: "./public",
    	historyApiFallback: true,
		port: 8080,
		host: getExternalIp()
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
				exclude: /node_modules/,
				use: [
					"style-loader",
					"css-loader"
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
	resolve: {
	    extensions: ['.js', '.jsx', '.json']
	}
}
