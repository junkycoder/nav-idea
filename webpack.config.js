var debug = process.env.NODE_ENV !== "production";

var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: path.join(__dirname, 'src'),
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./js/main.js",
	output: {
		path: __dirname + '/src/',
		filename: "main.min.js"
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
	],
	devServer: {
		port: 8082,
	    historyApiFallback: true
  	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/, 
				exclude: /node_modules/,
				loader: "babel",
				query: {
					presets: ['react', 'es2015', "stage-0"],
					plugins: ["transform-decorators-legacy"]
				},
			},
			{
				test: /\.s?css$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			}
		],
	},

};