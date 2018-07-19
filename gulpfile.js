var gulp = require('gulp'),
    sass = require('gulp-sass')


gulp.task('generalAutomation', function() {
    return gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'))
})

gulp.task('watchAutomation', function(){
    gulp.watch('./scss/**/*.scss', ['generalAutomation'])
})

//gulp.task('generalAutomation2', ['generalAutomation'], 'watchAutomation')