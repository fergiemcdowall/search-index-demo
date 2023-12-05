import path from 'path'
import webpack from 'webpack'

export default [
  {
    mode: 'development',
    entry: './src/app.js',
    experiments: {
      outputModule: true
    },

    output: {
      path: path.resolve('www/js'),
      publicPath: '/js/',
      filename: 'app.js'
    },
    devServer: {
      static: {
        directory: path.resolve('www')
      },
      compress: true,
      port: 3030
    },
    target: ['web']
  }
]
