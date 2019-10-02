const banner = require('./shared/banner')

module.exports = {
  plugins: {
    precss: {},
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true
      }
    },
    'postcss-url': {
      url: 'inline'
    },
    'postcss-header': {
      header: banner
    }
  }
}
