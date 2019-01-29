var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  plumber = require("gulp-plumber"),
  rename = require("gulp-rename"),
  autoprefixer = require('gulp-autoprefixer');


gulp.task("sass", function() {
  gulp
    .src("src/sass/main.scss")
    .pipe(plumber())
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(rename("style.css"))
    .pipe(autoprefixer({
      browsers: ['last 20 versions'],
      cascade: false
    }))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ["sass", "browser"], function () {
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*/*.*', ['build']);
  gulp.watch('src/*', ['build']);
  gulp.watch('src/*/*.*', browserSync.reload);
  gulp.watch('src/*', browserSync.reload);
});

gulp.task("browser", function() {
  browserSync({
    server: { baseDir: "app" },
    notify: false
  });
});

gulp.task("build", function() {
  gulp.src(["src/css/*.css"]).pipe(gulp.dest("app/css"));
  gulp.src(["src/js/*.*"]).pipe(gulp.dest("app/js"));
  gulp.src(["src/img/*.*"]).pipe(gulp.dest("app/img"));
  gulp.src(["src/html/*.*"]).pipe(gulp.dest("app/html"));
  gulp.src("src/*.html").pipe(gulp.dest("app"));
});
