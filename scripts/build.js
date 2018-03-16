process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require("../config/webpack.config.build.js");
const compiler = webpack(config);

compiler.run((err, stats) => {
  if(err){
    return reject(err);
  }
  return;
});
