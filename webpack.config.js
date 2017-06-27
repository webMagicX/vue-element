var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var autoprefixer = require('autoprefixer')

var WritePattern = require('./lib/WritePattern')
//同步写入pattern
var pattern = {
  "production": ()=> WritePattern("build"),
  "development": ()=> WritePattern("local"),
  "remote": ()=> WritePattern("remote")
}[process.env.NODE_ENV]

if( pattern ){
  pattern();
}

module.exports = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: path.resolve(__dirname, './build/vue_build/'),
    publicPath: process.env.NODE_ENV === 'production'
      ? '../../dist/'
      : '/dist/'
    ,
    filename: 'chunks/[name].js?[hash]'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this nessessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            'css': ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
          },
          // other vue-loader options go here
          postcss: [
            autoprefixer({
              browsers: ['last 5 versions', 'Android >= 4.0']
            })
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf)$/,
        loader: 'file-loader',
        options: {
          name: 'font/[name].[ext]?[hash]'
        }
      },
      { 
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      }
    ]
  },
  resolve: {
    alias: {
      //'vue$': 'vue/dist/vue.common.js'
      '@': path.resolve(__dirname, './src'),
      '@root': path.resolve(__dirname, './')
    }
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.CommonsChunkPlugin('common')
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {

  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
    ,new webpack.IgnorePlugin( /\.(mock|dev)/ )
  ])
}

