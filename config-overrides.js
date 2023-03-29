const { alias } = require('react-app-rewire-alias');
module.exports = function override(config) {
  alias({
    '~': './src',
    '@components': './src/components',
    '@styles': './src/styles',
    '@pages': './src/pages',
  })(config);

  return config;
};