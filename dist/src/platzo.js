'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzo;
function platzo(str) {
	var trans = str;

	if (str === reverse(str)) {
		return minMay(str);
	}

	if (str.toLowerCase().endsWith('ar')) {
		str = cutWord(trans = str.slice(0, -2));
	}

	if (str.toLowerCase().startsWith('z')) {
		str = cutWord(trans += 'pe');
	}

	return str;
}

function cutWord(str) {
	var trans = str;
	if (str.length >= 10) {
		trans = trans = str.slice(0, str.length / 2) + '-' + str.slice(str.length / 2, str.length);
	}
	return trans;
}

function reverse(str) {
	var rev = str.split('').reverse().join('');
	return rev;
}

function minMay(str) {
	var minMay = str.split('');
	var len = minMay.length;
	for (var i = 0; i < len; i = i + 2) {
		minMay[i] = minMay[i].toUpperCase();
	}

	return minMay.join('');
}