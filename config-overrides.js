const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    buffer: require.resolve("buffer/"),
    stream: require.resolve("stream-browserify"),
  };
  config.plugins = [
    ...config.plugins,
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      })
  ];

  return config;
};