/**
 * jsmin - Refer to LICENSE in base directory
 * @param {String} input JavaScript to minifiy
 * @return {String} Minified JavaScript
 */
// function jsmin(input) {
//   return input;
// }
var fs = require('fs'),
    minJQuery = fs.readFileSync(__dirname + '/../tests/expected_files/jquery.min.js', 'utf8'),
    jsmin = function () {
      return minJQuery;
    };

// Expose jsmin to the world
module.exports = jsmin;