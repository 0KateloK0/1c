const path = require('path');

module.exports = {
	entry: './js/index.js',
	mode: 'none',
	output: {
		filename: '[name].js',
	},
	resolve: {
	  	extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.m?jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$|\.sass$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: "file-loader",
				options: {
					name: "[path][name].[ext]"
				}
			}
		]
	}
}