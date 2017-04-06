// 载入外挂
var gulp = require('gulp'),
	//sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	//jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	livereload = require('gulp-livereload'),
	htmlmin = require('gulp-htmlmin'),
	sass = require('gulp-sass');

//html
gulp.task('common', function () {
	return gulp.src('src/common/**.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			minifyJS: true,//压缩页面JS
			minifyCSS: true//压缩页面CSS
		}))
		.pipe(gulp.dest('dist/common'))
		.pipe(notify({ message: 'common task complete' }));
})
//sass
gulp.task('scss', function () {
	return gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/newcss'));
})

// 样式
gulp.task('styles', function () {
	return gulp.src('src/newcss/*.css')

		.pipe(autoprefixer({
			browsers: [

				'last 2 version',

				'ios 7',
				'>1%'

			],
			cascade: true
		}))
		.pipe(gulp.dest('dist/newcss'))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/newcss'))
		.pipe(notify({ message: 'Styles task complete' }));
});

// 脚本
gulp.task('scripts', function () {
	return gulp.src('src/newjs/*.js')
		// .pipe(jshint('.jshintrc'))
		// .pipe(jshint.reporter('default'))
		// .pipe(concat('main.newjs'))
		// .pipe(gulp.dest('dist/scripts'))
		// .pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/newjs'))
		.pipe(notify({ message: 'Scripts task complete' }));
});

// 图片
gulp.task('images', function () {
	return gulp.src('src/img/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
		.pipe(gulp.dest('dist/img'))
		.pipe(notify({ message: 'Images task complete' }));
});

// 清理
gulp.task('clean', function () {
	return gulp.src(['dist/'], { read: false })
		.pipe(clean());
});
gulp.task('cleanwap', function () {
	return gulp.src(['dist/wap'], { read: false })
		.pipe(clean());
});


gulp.task('wapcss', () => {
	return gulp.src('src/wap/css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions', '> 1%', 'iOS 7'],
			cascade: true, //是否美化属性值 默认：true 像这样：
			//-webkit-transform: rotate(45deg);
			//        transform: rotate(45deg);

		}))
		.pipe(gulp.dest('dist/wap/css'))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/wap/css'))
		.pipe(notify({ message: 'wap端css文件压缩完毕' }));
});

gulp.task('wapcommon', function () {
	return gulp.src('src/wap/common/**.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			minifyJS: true,//压缩页面JS
			minifyCSS: true//压缩页面CSS
		}))
		.pipe(gulp.dest('dist/wap/common'))
		.pipe(notify({ message: 'wap common task complete' }));
})
gulp.task('wapJs', function () {
	return gulp.src('src/JS/*.js')
		// .pipe(jshint('.jshintrc'))
		// .pipe(jshint.reporter('default'))
		// .pipe(concat('main.newjs'))
		// .pipe(gulp.dest('dist/scripts'))
		// .pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/JS'))
		.pipe(notify({ message: 'wap的js压缩完毕' }));
});
gulp.task('wapjs', function () {
	return gulp.src('src/wap/js/*.js')
		// .pipe(jshint('.jshintrc'))
		// .pipe(jshint.reporter('default'))
		// .pipe(concat('main.newjs'))
		// .pipe(gulp.dest('dist/scripts'))
		// .pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('dist/wap/js'))
		.pipe(notify({ message: 'wap的js压缩完毕' }));
});
gulp.task('wapscss', () => {
	return gulp.src('src/wap/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/wap/css'))
		.pipe(notify({ message: 'wap scss finish' }))
})
gulp.task('wapimages', function () {
	return gulp.src('src/wap/images/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
		.pipe(gulp.dest('dist/wap/images'))
		.pipe(notify({ message: 'wap的图片压缩完毕' }));
});
gulp.task('copy', () => {
	return gulp.src('src/wap/*.html')
		.pipe(gulp.dest('dist/wap'))
})
gulp.task('wap', ['cleanwap'], () => {
	gulp.start('wapcss', 'wapJs', 'wapimages', 'wapcommon', 'wapjs', 'copy')
})

// 预设任务
gulp.task('default', ['clean', 'scss', 'wapscss'], function () {
	gulp.start('styles', 'scripts', 'common', 'wap');
});

// 看手
gulp.task('watch', function () {

	// 看守所有.scss档
	gulp.watch('src/scss/*.scss', ['scss'])
	gulp.watch('src/newcss/*.css', ['styles']);
	gulp.watch('src/wap/css/*.css', ['wapcss']);
	gulp.watch('src/wap/scss/*.scss', ['wapscss']);
	gulp.watch('src/wap/js/*.js', ['wapjs']);
	gulp.watch('src/wap/common/*.html', ['wapcommon']);
	// 看守所有.js档
	gulp.watch('src/newjs/*.js', ['scripts']);

	gulp.watch('src/wap/*.html', ['copy']);


	// 看守所有图片档
	//gulp.watch('src/img/**/**.*', ['images']);
	gulp.watch('src/wap/images/**/*', ['wapimages']);
	// 建立即时重整伺服器
	var server = livereload();

	// 看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整


});