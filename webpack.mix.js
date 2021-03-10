const mix = require('laravel-mix');
const webpackCompileModule = require('./webpackCompileModule.js');
const compileFiles = webpackCompileModule.compileFiles;

const g_css = 'node_modules/grapesjs/dist/css/grapes.min.css';

compileFiles('resources/assets/editor/js/index.js', 'public/assets/js/editor.js', mix.js);
compileFiles([g_css, 'resources/assets/editor/css/reset.css', 'resources/assets/editor/css/index.css'], 'public/assets/css/editor.css');
