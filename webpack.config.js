const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path');


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
				use: ['style-loader','css-loader']
			},{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: ['file-loader']
			}, {
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		})
	], 
	resolve: {
		alias: {
			components: path.resolve(__dirname, 'src/components'),
			pages: path.resolve(__dirname, 'src/pages'),
			contexts: path.resolve(__dirname, 'src/contexts'),
			hooks: path.resolve(__dirname, 'src/hooks'),
			css: path.resolve(__dirname, 'src/css/'),
			img: path.resolve(__dirname, 'src/img/'),
		}
	},
	devServer: {
		port: 3005,
		historyApiFallback: true,
	},
	output: {
		publicPath: `auto`
	}
}