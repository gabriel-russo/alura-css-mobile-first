const path = require('path');

module.exports = {
  entry: './js/index.js',
  mode: 'development',
  watch: true,
  devtool: 'eval-cheap-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
};
