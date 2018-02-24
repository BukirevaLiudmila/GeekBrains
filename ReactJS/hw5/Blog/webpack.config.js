const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
			{test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			},
			{
				test: /\.(woff|woff2)$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[name].[ext]"
			},
			{
				test: /\.ttf$/,
				loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]"
			},
			{
				test: /\.eot$/,
				loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]"
			},
			{
				test: /\.svg$/,
				loader: "url-loader?limit=10000&mimetype=application/svg+xml&name=./fonts/[name].[ext]"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			filename: path.join(__dirname, 'dist', 'index.html')
		})
	]
};