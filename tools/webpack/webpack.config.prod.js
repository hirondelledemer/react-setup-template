module.exports = {
  mode: 'production',
  entry: ['./src/main.tsx'],
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    clean: true,
  },
  plugins: [...require('./webpack.plugins')],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      // Custom Aliases
      ...require('./webpack.aliases'),
    },
  },
  stats: 'errors-warnings',
  performance: {
    hints: 'warning',
    maxEntrypointSize: 300000, // 300 KiB
    maxAssetSize: 250000, // 250 KiB
  },
  optimization: {
    minimize: true,
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 20000, // 20 KiB
      maxSize: 200000, // 200 KiB
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10,
        },
        react: {
          name: 'react-vendor',
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: 'all',
          priority: 20,
        },
        router: {
          name: 'router-vendor',
          test: /[\\/]node_modules[\\/](react-router|react-router-dom)[\\/]/,
          chunks: 'all',
          priority: 15,
        },
        query: {
          name: 'query-vendor',
          test: /[\\/]node_modules[\\/](@tanstack)[\\/]/,
          chunks: 'all',
          priority: 15,
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 5,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
