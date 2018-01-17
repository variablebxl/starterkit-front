let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
  processCssUrls: false, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
});

mix.js('resources/assets/js/scripts.js', 'public/assets');
mix.sass('resources/assets/css/screen.scss', 'public/assets').sourceMaps();
mix.browserSync({
  proxy: 'foldername.dev/',
  target: 'foldername.dev/',
  port: 8080,
  open: false,
  files : [
    'resources/assets/css/**/*.scss',
    'resources/assets/js/**/*.js',
    'resources/patternlab/sources/**/*.mustache'
  ]
});
