var fs = require('fs');
var path = require('path');
module.exports = function(pattern){
	var fd = fs.openSync(path.resolve(__dirname, '../config/pattern.js'), 'w');
	fs.writeSync(fd, "module.exports = '"+ (pattern || 'local') +"'", 'utf-8')
	fs.closeSync(fd);
}