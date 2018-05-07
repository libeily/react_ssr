const config = require('./webpack.config.dev');

// plugin
config.plugins.shift();
config.plugins.shift();

config.mode = 'production';
// devtool
config.devtool = false;

module.exports = config;
