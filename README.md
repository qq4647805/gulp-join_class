# gulp-join_class

### gulp插件 组合html里面的class

####[homepage](https://qq4647805.github.io/gulp-join_class)
####[github : https://github.com/qq4647805/gulp-join_class](https://github.com/qq4647805/gulp-join_class)


```javascript
var join_class = require('gulp-join_class');

gulp.task("join", function() {
	gulp.src(["src/*.html"]).pipe(join_class()).pipe(gulp.dest('dist/'));
});
```

### before
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body id="body">
    <div class="@a">
        <div class="@-b e @-b-f">
            <div class="@-c d">
                <div>
                    <div class="@-aaa"></div>
                </div>
            </div>
            <div class="@-abc">
                <div class="@-abc-cba"></div>
            </div>
        </div>
    </div>
</body>
</html>
```
### after
```html
<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body id="body">
    <div class="a">
        <div class="a-b e @-b-f">
            <div class="a-b-c d">
                <div>
                    <div class="a-b-c-aaa"></div>
                </div>
            </div>
            <div class="a-b-abc">
                <div class="a-b-abc-abc-cba"></div>
            </div>
        </div>
    </div>
</body>
</html>
```
