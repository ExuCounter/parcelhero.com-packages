const
 gulp  = require("gulp"),
 server = require("gulp-server-livereload"),
 cssmin = require('gulp-cssmin'),
 rename = require('gulp-rename'),
 cleanCSS = require('gulp-clean-css'),
 autoprefixer = require('gulp-autoprefixer'),
 csscomb = require('gulp-csscomb'),
 htmlmin = require('gulp-htmlmin'),
 uglify = require('gulp-uglify');
 pipeline = require('readable-stream').pipeline;
 imagemin = require('gulp-imagemin');
 print = require('gulp-print');

gulp.task("server", done => {
 gulp.src('./app')
 .pipe(server({
     livereload:true,
     directoryListing:{
         enable:true,
         path:'app'
     },
     open:false,
 }));
 done();
});

gulp.task('autoprefixer', () =>
    gulp.src('app/style/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/style/style.css'))
);

gulp.task('css-comb', done => {
   gulp.src('app/style/style.css')
    .pipe(csscomb())
    .pipe(gulp.dest('app/style/'));
   done();
});

gulp.task('css-minify', done => {
    gulp.src('app/style/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/style/'));
   done();

});

gulp.task('html-minify', () => {
  return gulp.src('app/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('app/'));
});

gulp.task('minify-js', done => {
     return pipeline(
        gulp.src('app/js/*.js'),
        uglify(),
        gulp.dest('app/js/')
  );
});

gulp.task('minify-img', () =>
    gulp.src('app/style/icons/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/img/icons/'))
);

gulp.task('minify', gulp.series( 'css-comb', 'css-minify', 'html-minify', 'minify-js', 'minify-img'))