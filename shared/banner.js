const createBanner = require('create-banner');
const changeCase = require('change-case');
const pkg = require('../package.json');

const name = changeCase.pascalCase(pkg.name);

module.exports = createBanner({
  data: {
    name: `${name}`,
    year: '2019-present',
  }
});
