import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass'; // Corrige a importação
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import optipng from 'imagemin-optipng';
import svgo from 'imagemin-svgo';
import terser from 'gulp-terser';

const paths = {
  styles: { src: './src/scss/**/*.scss', dest: './dist/css' },
  scripts: { src: './src/js/**/*.js', dest: './dist/js' },
  images: { src: './src/images/**/*.{jpg,jpeg,png,svg,gif}', dest: './dist/images' }
};

// Inicializa gulp-sass com dart-sass
const sassCompiler = gulpSass(sass);

// Compilar SASS
export function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sassCompiler({ outputStyle: 'compressed' }).on('error', sassCompiler.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.styles.dest));
}

// Minificar JS
export function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scripts.dest));
}

// Comprimir imagens
export function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin([
      mozjpeg({ quality: 75, progressive: true }),
      optipng({ optimizationLevel: 5 }),
      svgo()
    ]))
    .pipe(gulp.dest(paths.images.dest));
}

// Watch
export function watchFiles() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
}

// Tarefa padrão
export default gulp.series(
  gulp.parallel(styles, scripts, images),
  watchFiles
);



