const gulp = require("gulp");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();


const styles = () => {
  return gulp.src("css/style.css")
    .pipe(plumber())
    .pipe(postcss([
      autoprefixer(),
    ]))
    .pipe(gulp.dest("css"))
}

exports.styles = styles;

const server = (done) => {
  sync.init({
    server: {
      baseDir: '.' //сюда смотрит сервер
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}
exports.server = server;

const reload = done => {
  sync.reload();
  done();
}

const watcher = () => {
  gulp.watch("*.css", gulp.series(styles, reload));
  gulp.watch("js/main.js").on("change", sync.reload);
  gulp.watch("*.html").on("change", sync.reload);
}

exports.default = gulp.series(styles, server, watcher);
