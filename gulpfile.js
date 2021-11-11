const { src, dest, watch, parallel, series } = require('gulp');

const scss         = require('gulp-sass')(require('sass'));
const concat       = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify       = require('gulp-uglify');
const imagemin     = require('gulp-imagemin');
const svgSprite    = require('gulp-svg-sprite');
const del          = require('del');
const browserSync  = require('browser-sync').create();

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    notify: false
  })
}

const svgSprites = () => {
  return src('app/images/svg/*.svg')
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: "../sprite.svg"
      }
    },
  }))
  .pipe(dest('app/images'));
}

function styles() {
  return src('app/scss/style.scss')
   .pipe(scss({outputStyle: 'compressed'}))
   .pipe(concat('style.min.css'))
   .pipe(autoprefixer({
     overrideBrowserslist: ['last 10 version'],
     grid: true
   }))
   .pipe(dest('app/css'))
   .pipe(browserSync.stream())
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/mixitup/dist/mixitup.min.js',
    'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
    'app/js/main.js'
  ])
   .pipe(concat('main.min.js')) 
   .pipe(uglify())
   .pipe(dest('app/js'))
   .pipe(browserSync.stream()) 
}

function images(){
  return src('app/images/**/*.*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
	  imagemin.mozjpeg({quality: 75, progressive: true}),
	  imagemin.optipng({optimizationLevel: 5}),
	  imagemin.svgo({
		plugins: [
			{removeViewBox: true},
			{cleanupIDs: false}
		]
	})
]))
  .pipe(dest('dist/images'))
}

const resources = () => {
  return src('app/**')
  .pipe(dest('dist'))
}

function build() {
  return src([
    'app/**/*.html',
    'app/*.png',
    'app/*.ico',
    'app/css/style.min.css',
    'app/js/main.min.js',
    'app/fonts/*.*'
  ], {base: 'app'}) 
  .pipe(dest('dist'))
  }

  function cleanDist() {
    return del('dist')
  }


function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/images/svg/*.svg'], svgSprites);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/resources/**'], resources);
  watch(['app/**/*.html']).on('change', browserSync.reload);
}


exports.styles = styles; 
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.svgSprites = svgSprites;

exports.build = series(cleanDist, images, resources, svgSprites, build);
exports.default = parallel(styles, scripts, svgSprites, browsersync,watching); 