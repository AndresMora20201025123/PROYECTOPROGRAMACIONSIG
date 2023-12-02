const path = require('path');

module.exports = {
  entry: {
    main1: './src/js/main1.js',
    main2: './src/js/main2.js',
    main3: './src/js/main3.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'src/public/js')
  },
  mode: 'development'
};
