const gulp = require("gulp");
const themekit = require("@shopify/themekit");
const sass = require("gulp-sass");

gulp.task("watch", function () {
  gulp.watch(["scss/*.scss", "templates/*.liquid"]);
  themekit.command("watch", {
    allowLive: true,
    env: "development"
  });
});
