const path = require('path');

module.exports = {
  entry: {
    main1: './src/js/main1.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'src/public/js')
  },
  mode: 'development'
};
