const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
  output: {
    publicPath: 'http://localhost:8080/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.vue', '.jsx', '.js', '.json'],
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: 'growlers',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './vcart': './src/components/vcart.js',
        './vsearch': './src/components/vsearch.js',
        './vtaps': './src/components/vtaps.js',
        './cart': './src/components/cart.vue',
        './search': './src/components/search.vue',
        './taps': './src/components/taps.vue',
        './store': './src/store.ts',
      },
      shared: require('./package.json').dependencies,
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
}
