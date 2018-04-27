var gulp = require('gulp'),  
	sourcemaps = require('gulp-sourcemaps')
  	pug = require('gulp-pug');

// run this task by typing in gulp pug in CLI
gulp.task('pug', function() {  
  return gulp.src('views/**/*.pug')
      .pipe(pug()) // pipe to pug plugin
      .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
       })
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('public')); // tell gulp our output folder
});

gulp.task('default', ['watch']);

gulp.task('watch', function(){
	gulp.watch('views/**/*.pug', ['pug']);
});

