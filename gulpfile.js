import { task } from 'gulp'
const browserSync = require('browser-sync')

// task('default', function (done) {
// 	console.log('domyslene zadanie')
// 	done()
// })

// $ npm install browser-sync gulp --save-dev

gulp.task('reload', function () {
	browserSync.reload()
})

gulp.task('serve', function () {
	browserSync({
		server: 'src',
	})

	gulp.watch('src/*.html', ['reload'])
})
