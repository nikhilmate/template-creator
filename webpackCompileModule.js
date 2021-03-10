const mix = require('laravel-mix');
const nodeEnv = process.env.NODE_ENV;

function compileFiles(inpArray, outArray, mixFn) {
    if (nodeEnv !== 'production' && mixFn === mix.babel) {
        mixFn = mix.combine;
    }
    if (!mixFn) mixFn = mix.styles;

    if (typeof inpArray === 'string') inpArray = [inpArray];
    if (typeof outArray === 'string') outArray = [outArray];

    for (var i = 0; i < outArray.length; i++) {
        processFiles(inpArray, outArray[i], mixFn);
    }
    return this;
}

function processFiles(inpArray, outFile, mixFn) {
    if (inpArray.length === 1) {
        inpArray = inpArray[0];
    }
    if (mixFn === mix.styles) {
        mixFn(inpArray, outFile).options({
            processCssUrls: false
        });
    } else {
        mixFn(inpArray, outFile);
    }
}

module.exports = {
    compileFiles: compileFiles
};
