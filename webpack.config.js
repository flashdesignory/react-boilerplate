const path = require("path");
var os = require('os');

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

console.log(addresses);

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
		host: addresses[0]
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
