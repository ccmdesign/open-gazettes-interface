var nunjucksRender  = require('gulp-nunjucks-render'),
    browserSync     = require('browser-sync'),
    gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    data            = require('gulp-data'),
    imagemin        = require('gulp-imagemin'),
    cache           = require('gulp-cache'),
    del             = require('del');

// Clean Dist
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

// Browser Sync
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'public'
    },
  })
})

// Sass
gulp.task('sass', function() {
  return gulp.src('source/sass/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('vendor', function(){
  return gulp.src('source/static/vendor/**/*')
  .pipe(gulp.dest('public/vendor'))
});

gulp.task('image-dev', function(){
  return gulp.src('source/static/images/**/*')
  .pipe(gulp.dest('public/images'))
});

gulp.task('js-dev', function(){
  return gulp.src('source/static/*.js')
  .pipe(gulp.dest('public'))
});

// Nunjucks
gulp.task('nunjucks', function() {
  nunjucksRender.nunjucks.configure(['source/templates/']);

  // Gets .html and .nunjucks files in pages
  return gulp.src('source/templates/**/*.+(html|nunjucks)')
  // Adding data to Nunjucks
  .pipe(data(function() {
    return require('./source/data/data.json')
  }))
  // Renders template with nunjucks
  .pipe(nunjucksRender())
  // output files in app folder
  .pipe(gulp.dest('public'))
  .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('watch', ['browserSync', 'sass', 'nunjucks', 'image-dev', 'vendor', 'js-dev'], function (){
  gulp.watch('source/sass/**/*.scss', ['sass']); 
  gulp.watch('source/templates/**/*.html', ['nunjucks']); 
  // Other watchers
});