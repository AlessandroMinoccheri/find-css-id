'use strict';
var assert = require('assert');
var find = require('./index');

it('should get match in css test file', function (cb) {
	find('id-to-find', 'test/style.css', function (err, finded) {
		assert(!err, err);
		assert(finded);
		cb();
	});
});

it('should get match in css test file', function (cb) {
	find('id-to-find', 'test/test.html', function (err, finded) {
		assert(!err, err);
		assert(finded);
		cb();
	});
});

it('should get match in css test file', function (cb) {
	find('id-to-find', 'test/test.php', function (err, finded) {
		assert(!err, err);
		assert(finded);
		cb();
	});
});


it('should get match in css test file', function (cb) {
	find('id-to-find', 'test/test.ctp', function (err, finded) {
		assert(!err, err);
		assert(finded);
		cb();
	});
});

