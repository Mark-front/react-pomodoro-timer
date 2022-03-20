const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == 'development';
const IS_PROD = NODE_ENV == 'production';
const GLOBAL_CSS_REGEX = /\.global\.css/;
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function setupDevtool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
}

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  resolve: {
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], 
  alias: {
    'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
  }
  },
  entry: [
    path.resolve(__dirname, '../src/client/index.jsx'),
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
  ], 
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: '/static/',
  }, 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader', 
            options: {
              modules: {
                mode: 'local', 
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            }
          },
        ],
        exclude: GLOBAL_CSS_REGEX,
      },
      {
        test: GLOBAL_CSS_REGEX,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
			{
			    test: /\.(ogg|mp3|wav|mpe?g)$/i,
			    use: 'file-loader',
			},
      {
        test: /\.(?:ico|gif|png|mp3|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    port: 3000, 
    open: true,
    hot: IS_DEV
  },
  devtool: setupDevtool(),
  plugins: IS_DEV 
  ? [
      new CleanWebpackPlugin(),
      new HotModuleReplacementPlugin(),
    ] : [],
};