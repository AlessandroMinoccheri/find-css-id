find-css-id
===========

a npm package to find css id inside your css/html/php/ctp/tpl/asp files

https://www.npmjs.org/package/find-css-id

## Install

```sh
$ npm install --save find-css-id
```


## Usage

```js
var info = require('find-css-id');

find(find_id, folder, function (err, finded) {
	console.log(finded);
});
```

## CLI

```sh
$ npm install --global find-css-id
```

  Usage

  ```
  $ find-css-id <id-to-find> <folder-name-or-css-file-or-html-file>
  ```
  
  Example
  
  ```
  $ find-css-id id-to-find project
  ```

It will prints:

```
found in index.html 1 match of id-to-find
found in test.php 2 match of id-to-find
found in test.ctp 1 match of id-to-find
found in test.tpl 0 match of id-to-find
found in test.asp 1 match of id-to-find
found in css/style.css 2 match of id-to-find
```

## OPTIONS
You can specify in the second argument or the css file, or an html file, or a php file, or a ctp file, or a tpl file, or an asp file,  or a directory, the package can search recursively all css/hmtl files inside the directory and search the id inside that files.

So you can write this to search inside a directory:

```
$ find-css-id id-to-find css
```

In this case the package search inside the directory all css file inside it and print result like this:

```
found in css/style.css 2 match of id-to-find
found in css/directory/other.css 1 match of id-to-find
```

If you would like to have an help you can write into your console

  ```
  $ find-css-id -h
  ```

It will prints

```
npm package to find css id into files or directory

Usage
  $ find-css-id <css-id-to-find> <folder-or-file-to-search>

Example
  $ find-css-id id-to-find css/style.css
```

If you would like to see the version of the package you can write into your console

```
  $ find-css-id -v
  ```

  It will prints

  ```
  0.1.0
  ```

## License

The MIT License (MIT)

Copyright (c) 2014 Alessandro Minoccheri

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
