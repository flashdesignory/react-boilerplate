process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const path = require('path');
const chalk = require('chalk');
const open = require('open');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require("../config/webpack.config.dev.js");
const compiler = webpack(config);

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

const server = new webpackDevServer(compiler, {
	contentBase: "./public",
	historyApiFallback: true,
	publicPath: '',
	inline: true,
	hot: true
});

server.listen(port, host, function(err, result){
	if(err){
		return console.log(err);
	}

	var url = 'http://' + host + ':' + port;

	console.log();
	console.log(chalk.green("*******************************************"));
	console.log();
	console.log(chalk.cyan("listening at: " + url));
	console.log();
	console.log(chalk.green("*******************************************"));
	console.log();

	open(url);
});
