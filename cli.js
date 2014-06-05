#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var find = require('./index');
var input = process.argv[2];
var folder = process.argv[3];

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ find-css-id <css-id-to-find> <folder-or-file-to-search>');
	console.log('');
	console.log('Example');
	console.log('  $ find-css-id clear css/style.css');
}

if (!input || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

if((find != null) && (find != '') && (find != undefined) & (folder != null) && (folder != '') && (folder != undefined)){
	find(input, folder, function (err, finded) {
		if (err) {
			console.error(err);
			process.exit(1);
			return;
		}

		console.log(finded);
	});
}

return;
