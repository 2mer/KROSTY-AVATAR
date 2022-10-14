const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'assets'),
		},
		compress: true,
		port: 9000,
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: 'assets/', to: 'assets/' },
				{ from: 'src/index.html', to: 'index.html' },
			],
		}),
	],
};
