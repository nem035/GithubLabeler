require('babel/register')
var getConfig = require('hjs-webpack');
var React = require('react');

module.exports = getConfig({
	in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true
});
