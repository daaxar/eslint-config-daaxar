const { readFileSync } = require('fs');

const requireJSON = (filepath) => {
    const buffer = readFileSync(filepath);
    const json = buffer.toString();

    return JSON.parse(json);
};

exports.requireJSON = requireJSON;
