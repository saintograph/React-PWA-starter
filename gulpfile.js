var gulp = require('gulp');

gulp.task('generate-service-worker', function(callback) {
  const path = require('path');
  const swPrecache = require('sw-precache');
  const rootDir = 'assets';

  swPrecache.write(path.join(rootDir, 'sw.js'), {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif}'],
    stripPrefix: rootDir
  }, callback);
});