const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const script = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const vendors = require('./gulp/tasks/vendorsJS');
const imageMinify = require('./gulp/tasks/imageMinify');
const styles = require('./gulp/tasks/styles');
const clean = require('./gulp/tasks/clean');
const pug2html = require('./gulp/tasks/pug');
const serve = require('./gulp/tasks/serve');
const spritePNG = require('./gulp/tasks/spritePNG');

const dev = gulp.parallel(pug2html, script, vendors, styles, imageMinify, spritePNG, fonts);

exports.default = gulp.series(
	clean,
	dev,
	serve
);



gulp.task('deploy', function () {
	return gulp.src('./dist/**/*')
		.pipe(ghPages());
});
