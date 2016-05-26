const jsdom = require('jsdom');
const env = jsdom.env;
const jquery = require('jquery');
const serializeDocument = jsdom.serializeDocument;
const join_class = function(html, char) {
	const window = jsdom.jsdom(html).defaultView;
	var char = char || '@';
	const $ = jquery(window);
	const getClass = $el => {
		var c = $el.attr('class');
		if (c) {
			var c_arr = c.split(' ');
			return $.grep(c_arr, v => v[0] == char)[0].replace(char, '');
		}
	}
	var change_arr = [];
	$(`[class*='${char}-']`).each((index, el) => {
		const $p = $(el).parents().filter(`[class*='${char}']`);
		if (!$p) {
			return;
		}
		var p_class = $p.map(function() {
			return getClass($(this));
		}).get().reverse();
		p_class = p_class.join('')
		var c_class = p_class + getClass($(el));
		change_arr.push([$(el), c_class]);
	});
	$.each(change_arr, (i, n) => {
		var n_class = n[0].attr('class');
		var r_class = char + getClass(n[0]);
		var n_class = n_class.replace(r_class, n[1]);
		n[0].attr('class', n_class);
	});
	$(`[class*='${char}']`).not(`[class*='${char}-']`).each((index, el) => {
		var n_class = $(el).attr('class');
		var r_class = getClass($(el));
		n_class = n_class.replace(char + r_class, r_class);
		$(el).attr('class', n_class);
	});
	return serializeDocument(window.document);
}
module.exports = join_class;
