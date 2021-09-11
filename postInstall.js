const { resolve, extname, dirname, join, basename } = require('path');
const {
    existsSync,
    copyFileSync,
    writeFileSync,
    mkdirSync,
    renameSync,
} = require('fs');
const { requireJSON } = require('./requireJSON');

const rootTarget = resolve('../..');
const files = [
    '.husky/pre-commit',
    '.vscode/settings.json',
    '.eslintignore',
    '.eslintrc.js',
    '.lintstagedrc',
    '.prettierignore',
    '.prettierrc.json',
];

const tplFolder = resolve('./template/');
files.forEach((file) => {
    const ext = extname(file);
    const fileSource = resolve(tplFolder, file);
    const fileTarget = resolve(rootTarget, file);
    const pathTarget = dirname(fileSource).replace(tplFolder, '');

    if (pathTarget) {
        mkdirSync(join(rootTarget, pathTarget), { recursive: true });
    }

    if (ext === '.json') {
        const source = requireJSON(fileSource);
        const target = existsSync(fileTarget) ? requireJSON(fileTarget) : {};

        const json = { ...target, ...source };

        writeFileSync(
            fileTarget,
            JSON.stringify(json, null, json.tabWidth || 4)
        );
    } else {
        if (existsSync(fileTarget))
            renameSync(
                fileTarget,
                join(
                    dirname(fileTarget),
                    `_TO_MERGE_${basename(fileTarget)}_${new Date()
                        .toISOString()
                        .replace(/[^\d]/gi, '-')
                        .slice(0, 19)}`
                )
            );

        copyFileSync(fileSource, fileTarget);
    }
});
