var gulp = require('gulp');

gulp.task('js', function(){
    console.log('Task JS actions...');
});

gulp.task('css', function(){
    console.log('Task CSS actions...');
});

gulp.task('watch', function(){
    var watcher = gulp.watch('app/**/*.css', ['css','js']);

    watcher.on('change', function(e){
        console.log('');
        console.log('   ==> File "'+ e.path + '" was ' + e.type + ', running tasks...');
        console.log('');
    });
});