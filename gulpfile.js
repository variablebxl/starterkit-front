var gulp = require('gulp'),
    shell = require('gulp-shell'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    beautify = require('gulp-beautify'),
    cssmin = require('gulp-cssmin'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');


gulp.task('js', function() {
  gulp.src(['assets/js/vendor/*.js', 'assets/js/*.js'])
  // Concatène tous les fichiers js en 1
  .pipe(concat('scripts.js'))
  // Indente
  .pipe(beautify({indentSize: 2}))
  // Sauve le fichier dans Dist
  .pipe(gulp.dest("dist"))
  // Renomme le fichier avec .min
  .pipe(rename({suffix: '.min'}))
  // Compresse le fichier
  .pipe(uglify())
  // Sauve le fichier compressé dans Dist
  .pipe(gulp.dest('dist'))
});

gulp.task("sass", function(){
  gulp.src('assets/css/*.scss')
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
  // Sauve le fichier dans Dist
  .pipe(gulp.dest("dist"))
  // Renomme le fichier avec .min
  .pipe(rename({suffix: '.min'}))
  // Compresse le fichier
  .pipe(cssmin())
  // Sauve le fichier dans Dist
  .pipe(gulp.dest('dist'))
  .pipe(livereload())
});

gulp.task("css-font", function(){
  gulp.src('assets/fonts/*.scss')
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
  // Sauve le fichier dans Dist
  .pipe(gulp.dest("dist"))
  // Renomme le fichier avec .min
  .pipe(rename({suffix: '.min'}))
  // Compresse le fichier
  .pipe(cssmin())
  // Sauve le fichier dans Dist
  .pipe(gulp.dest('dist'))
  .pipe(livereload())
});

gulp.task('patternlab', shell.task([
  // Lance Patternalb Watch
  'cd patternlab && php core/console --watch --patternsonly'
]));

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('assets/js/**/*.js',['js']);
  gulp.watch('assets/css/**/*.scss',['sass']);
  gulp.watch('assets/fonts/*.scss',['css-font']);
});

gulp.task('default', ['watch', 'patternlab']);
