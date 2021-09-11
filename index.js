const config = require('./config');

const extendsConfig = ['airbnb-base', 'prettier'];

module.exports = {
    ...config,
    extends: extendsConfig,
};
