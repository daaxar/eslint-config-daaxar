const config = require('.');

const extendsConfig = ['airbnb-base', 'prettier'];

module.exports = {
    ...config,
    extends: extendsConfig,
};
