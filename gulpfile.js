"use strict";

const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");

gulp.task("sass", function () {
    return gulp
        .src("./src/style/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write("./"))
        .pipe(concat("main.css"))
        .pipe(gulp.dest("./src/"));
});

gulp.task("run", function () {
    gulp.watch("./src/style/**/*.scss", gulp.series("sass"));
});
