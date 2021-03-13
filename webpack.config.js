const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}, {
				test: /\.html$/,
				use: ['html-loader']
			}, {
				test: /\.css$/,
				use:['style-loader','css-loader']
			}, {
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new FaviconsWebpackPlugin('./src/img/Tokonoma.svg') // svg works too!
	], 
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components'),
			css: path.resolve(__dirname, 'src/css/'),
			img: path.resolve(__dirname, 'src/img/'),
		}
	}
}