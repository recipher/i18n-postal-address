module.exports = {
  context: __dirname + '/lib',
  entry: './i18npa.js',
  output: {
    path: __dirname + '/dist',
    filename: 'i18npa.js',
    library: 'PostalAddress',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  }
};
