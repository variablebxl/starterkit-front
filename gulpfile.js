var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();
var sass          = require('gulp-sass');
var browserify    = require('browserify');
var source        = require('vinyl-source-stream');
var buffer        = require('vinyl-buffer');
var beautify      = require('gulp-beautify');
var rename        = require('gulp-rename');
var sourcemaps    = require('gulp-sourcemaps');
var autoprefixer  = require('gulp-autoprefixer');
var cssmin        = require('gulp-cssmin');
var shell         = require('gulp-shell');
var concat        = require('gulp-concat');
var gutil         = require('gulp-util');
var uglify        = require('gulp-uglify-es').default;
var babelify      = require('babelify');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    proxy: "project-name.test",
    port: 8080,
    open: false
  });
  gulp.watch("resources/assets/js/**/*.js", ['js-watch']);
  gulp.watch("resources/assets/css/**/*.scss", ['sass']);
  gulp.watch("resources/patternlab/**/*.mustache").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("resources/assets/css/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
      style: 'expanded',
      sourceComments: 'normal'
    }))
    // Ajoute des préfixes automatiquement
    .pipe(autoprefixer())
    // Commente le code pour debug
    .pipe(sourcemaps.write())
    // Sauve le fichier dans public/assets
    .pipe(gulp.dest("public/assets"))
    // browserSync
    .pipe(browserSync.stream())
    // Renomme le fichier avec .min
    .pipe(rename({suffix: '.min'}))
    // Compresse le fichier
    .pipe(cssmin())
    // Sauve le fichier dans public/assets
    .pipe(gulp.dest('public/assets'))
});

// process JS files and return the stream.
gulp.task('js', function () {
  return browserify({
    entries: './resources/assets/js/scripts.js',
    debug: true
  })
  .transform("babelify", { presets: ["es2015"] })
  .bundle()
  .pipe(source('scripts.js'))
  .pipe(buffer())
  // Indente
  .pipe(beautify({indentSize: 2}))
  // Sauve le fichier dans public/assets
  .pipe(gulp.dest("public/assets"))
  // Renomme le fichier avec .min
  .pipe(rename({suffix: '.min'}))
  // Compresse le fichier
  .pipe(uglify())
  // Sauve le fichier compressé dans public/assets
  .pipe(gulp.dest('public/assets'))
});

// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
  browserSync.reload();
  done();
});

// Patternlab
gulp.task('patternlab', shell.task([
  // Lance Patternalb Watch
  'cd resources/patternlab && php core/console --watch --patternsonly'
]));

gulp.task('front', ['serve']);
gulp.task('frontlab', ['serve', 'patternlab']);


////
// Admin Tasks
////
////

gulp.task('admin-js', function() {
  gulp.src([
    'resources/assets/js/admin/vendor/*.js',
    'resources/assets/js/admin/libs/*.js',
    'resources/assets/js/admin/*.js'
  ])
  // Concatène tous les fichiers js en 1
  .pipe(concat('scripts.js'))
  // Indente
  .pipe(beautify({indentSize: 2}))
  // Sauve le fichier dans public/assets
  .pipe(gulp.dest("public/assets/admin"))
  // Renomme le fichier avec .min
  .pipe(rename({suffix: '.min'}))
  // Compresse le fichier
  .pipe(uglify())
      .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  // Sauve le fichier compressé dans public/assets
  .pipe(gulp.dest('public/assets/admin'))
});

gulp.task("admin-sass", function(){
  gulp.src('resources/assets/sass/admin/*.scss')
  .pipe(sourcemaps.init())
  // Compile sass avec les commentaires dans la source
  .pipe(sass({
    style: 'expanded',
    sourceComments: 'normal'
  }))
  // Ajoute des préfixes automatiquement
  .pipe(autoprefixer())
  // Commente le code pour debug avec firebug
  .pipe(sourcemaps.write())
  // Sauve le fichier dans public/assets
  .pipe(gulp.dest('public/assets/admin'))
  // Renomme le fichier avec .min
  .pipe(rename({suffix: '.min'}))
  // Compresse le fichier
  .pipe(cssmin())
  // Sauve le fichier dans public/assets
  .pipe(gulp.dest('public/assets/admin'))
});

gulp.task('admin', function() {
  gulp.watch('resources/assets/js/admin/**/*.js',['admin-js']);
  gulp.watch('resources/assets/sass/admin/**/*.scss',['admin-sass']);
});
