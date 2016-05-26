var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var path = require('path');
var fn = require('./fn.js');
function join_class(opt) {
	var n_opt = opt || {
		char: '@'
	};
	// 创建一个让每个文件通过的 stream 通道
	return through.obj(function(file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
		}
		if (file.isBuffer()) {
			var cnt = String(file.contents);
			cnt = fn(cnt, n_opt.char);
			file.contents = new Buffer(cnt);
			// cb(null, file);
			// file.contents = fn(file.contents, n_opt.char);
		}
		if (file.isStream()) {
			cb(null, file);
		}
		cb(null, file);
	});
};
module.exports = join_class;
