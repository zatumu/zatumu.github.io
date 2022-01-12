const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

// タスク
gulp.task('default', function() {
    return gulp.src('./contents/images/*.svg') // 元となるSVGアイコンのパス（*.svg で全SVGを対象に）
      .pipe(svgSprite({
        mode: {
          symbol: {
            // スプライト画像を置くディレクトリ名。指定しないとデフォルト設定（svg）に。
            dest: 'images',
            // スプライト画像のファイル名
            sprite: 'sprite.svg',
  
            // スプライト画像のプレビュー用HTMLが欲しい人はこちらも記述してください。
            // 任意の場所とファイル名を指定してください。
            // example: {
            //   dest: '../css/svg-sprite-preview/sprite.html',
            // }
          },
        } // mode
      }))
  
      // 書き出し先
      .pipe(gulp.dest('./contents'))
    });