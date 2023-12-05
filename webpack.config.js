import path from 'path'
import webpack from 'webpack'

export default [
  {
    mode: 'production',
    entry: './src/app.js',
    output: {
      path: path.resolve('www/js'),
      publicPath: '/js/',
      filename: 'app.js'
    },
    optimization: {
      usedExports: true
    },
    devServer: {
      static: {
        directory: path.resolve('www')
      },
      compress: true,
      port: 3030
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  }
]
