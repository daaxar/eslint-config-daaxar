const tabWidth = 4;

module.exports = {
    strict: 'error',
    indent: ['warn', tabWidth],
    'prettier/prettier': [
        'error',
        {
            tabWidth,
            singleQuote: true,
        },
        {
            usePrettierrc: true,
        },
    ],
};
