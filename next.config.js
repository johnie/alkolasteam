const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);

module.exports = {
    exportPathMap: async function(
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        if (dev) {
            return defaultPathMap;
        }
        // This will copy CNAME from your project root into the out directory
        await copyFile(join(dir, 'CNAME'), join(outDir, 'CNAME'));
        return defaultPathMap;
    }
};
