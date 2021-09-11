const env = require('./env');
const rules = require('./rules');
const parserOptions = require('./parserOptions');

module.exports = {
    env,
    parserOptions,
    rules,
    plugins: ['prettier'],
};
