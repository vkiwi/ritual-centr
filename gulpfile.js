var gulp = require('gulp');
var uglifyjs = require('uglify-js'); 
var composer = require('gulp-uglify/composer');
var pump = require('pump');
var minify = composer(uglifyjs, console);

gulp.task('default', defaultTask);

function defaultTask(cb) {
  // place code for your default task here
  console.log('задача выполнена');
  cb();
}

gulp.task('compress-js', function (cb) {
  var options = {};
 
  pump([
      gulp.src('./js/*.js'),
      minify(options),
      gulp.dest('dist/js')
    ],
    cb
  );
});


// exports.default = defaultTasks