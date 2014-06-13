"use strict"

var fs = require('fs');

RegExp.quote = function(str) {
  return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};

function getDirectoryFiles(directory, callback) {
    fs.readdir(directory, function(err, files) {
        files.forEach(function(file){
            fs.stat(directory + '/' + file, function(err, stats) {
                if(stats.isFile())
                  	callback(directory + '/' + file);

                if(stats.isDirectory())
                  	getDirectoryFiles(directory + '/' + file, callback);
                
            });
        });
    });
}

module.exports = function (css_id, name, cb) {
	var path_explode = name.split('/');
	var last_value = path_explode[path_explode.length-1];
	if(last_value.indexOf('.css') > 0){
		fs.readFile(name, 'utf8', function (err,data) {
			if (err)
			    return console.log(err);

			var id_to_find = css_id;
			var reg = new RegExp('\\#' + RegExp.quote(id_to_find) + '([,:\\s\\.][^\\{]*)?\\{', 'gmi');
			var found = data.match(reg);
			
			if((found != '') && (found != null))
				found = found.length;
			else
				found = 0;

			cb(null, 'found in: ' + name + ': ' + found + ' match of ' + id_to_find);
		});
	}
	else{
		if((last_value.indexOf('.html') > 0) || (last_value.indexOf('.php') > 0)){
  			fs.readFile(name, 'utf8', function (err,data) {
				if (err)
				    return console.log(err);

				var id_to_find = css_id;
				
				var reg = new RegExp("(<\\w+?\\s+?id\\s*=\\s*['\"][^'\"]*?\\b)" + id_to_find + "\\b", "i");

				var found = data.match(reg);
				
				if((found != '') && (found != null))
					found = found.length;
				else
					found = 0;

				cb(null, 'found in: ' + name + ': ' + found + ' match of ' + id_to_find);
			});
		}
		else{
			if(last_value.indexOf('.') == -1){
				getDirectoryFiles(name, function(file) {
				    var path_explode = file.split('/');
					var last_value = path_explode[path_explode.length-1];
					if(last_value.indexOf('.css') > 0){
					    fs.readFile(file,'utf-8',function(err, data){
					        if (err) 
					        	return console.log(err);

					        var id_to_find = css_id;
							var reg = new RegExp('\\.' + RegExp.quote(id_to_find) + '([,:\\s\\#][^\\{]*)?\\{', 'gmi');
							var found = data.match(reg);
							
							if((found != '') && (found != null))
								found = found.length;
							else
								found = 0;

							cb(null, 'found in: ' + file + ': ' + found + ' match of ' + id_to_find);
					    });
					}
					else{
						if((last_value.indexOf('.html') > 0) || (last_value.indexOf('.php') > 0)){
				  			fs.readFile(file, 'utf8', function (err,data) {
								if (err)
								    return console.log(err);

								var id_to_find = css_id;
								
								var reg = new RegExp("(<\\w+?\\s+?id\\s*=\\s*['\"][^'\"]*?\\b)" + id_to_find + "\\b", "i");

								var found = data.match(reg);
								
								if((found != '') && (found != null))
									found = found.length;
								else
									found = 0;

								cb(null, 'found in: ' + file + ': ' + found + ' match of ' + id_to_find);
							});
						}
					}
				});
			}
		}
	}
};
