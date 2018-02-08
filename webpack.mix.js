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
  processCssUrls: false
});

mix.js('resources/assets/js/scripts.js', 'public/assets');
mix.sass('resources/assets/css/screen.scss', 'public/assets').sourceMaps();
mix.browserSync(
  {
    files : ['public/assets/**/*.css', '**/*.blade.php', '!resources/assets/**/*'],
    proxy: 'lacambre.dev/',
    port: 8080,
    open: false
  },
  {
    reload: false
  }
);
