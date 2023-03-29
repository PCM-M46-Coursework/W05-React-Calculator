const { alias } = require('react-app-rewire-alias');
module.exports = function override(config) {
  alias({
    '~': './src',
    '@components': './src/components',
    '@styles': './src/styles',
    '@pages': './src/pages',
  })(config);

  config.module.rules.push({
    test: /\.jsonc$/,
    loader: 'jsonc-loader',
    type: 'javascript/auto',
  }, {
    test: /\.json5$/,
    loader: 'json5-loader',
    type: 'javascript/auto',
  });

  return config;
};