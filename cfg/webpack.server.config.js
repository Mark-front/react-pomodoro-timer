const path = require('path');
const nodeEXternals =  require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEX = /\.global\.css/;


module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: "server.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  externals: [nodeEXternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'css-loader', 
          options: {
            modules: {
              mode: 'local', 
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
            onlyLocals: true,
          }
        },
        ],
        exclude: GLOBAL_CSS_REGEX,
      },
      {
        test: GLOBAL_CSS_REGEX,
        use: ['css-loader']
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
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimize: false,
  }
};