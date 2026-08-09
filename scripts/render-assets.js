'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderAssets() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/assets');
    const destPath = upath.resolve(upath.dirname(__filename), '../dist/.');
    
    sh.cp('-R', sourcePath, destPath);

    const hotsiteSourcePath = upath.resolve(upath.dirname(__filename), '../hotsite');
    const hotsiteDestPath = upath.resolve(upath.dirname(__filename), '../dist/hotsite');
    
    if (!fs.existsSync(hotsiteDestPath)) {
        sh.mkdir('-p', hotsiteDestPath);
    }
    sh.cp('-R', upath.resolve(hotsiteSourcePath, '*'), hotsiteDestPath);

    // Copiar manifesto e service worker para a raiz de dist/
    sh.cp(upath.resolve(sourcePath, 'manifest.json'), destPath);
    sh.cp(upath.resolve(sourcePath, 'sw.js'), destPath);
};