# gulp-join_class

### gulp插件 组合html里面的class

####[homepage](https://qq4647805.github.io/gulp-join_class)
####[github : https://github.com/qq4647805/gulp-join_class](https://github.com/qq4647805/gulp-join_class)


```javascript
var join_class = require('gulp-join_class');

gulp.task("join", function() {
	gulp.src(["src/*.html"]).pipe(join_class()).pipe(gulp.dest('dist/'));
});

### 原来
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body id="abc">
    <div class="@a">
        <p class="@-plap-btn">
            <span class="@-c c b"></span>
        </p>
        <div>
            <div class="@-ddd">
                <div class="@-sss"></div>
            </div>
        </div>
    </div>
    <div class="@asd">
        <div class="@-sdsd">
            <div class="@-a">
                <div class="sd">
                    <div class="@-b"></div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
