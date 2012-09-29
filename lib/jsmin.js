/**
 * jsmin - Refer to LICENSE in base directory
 * @param {String} input JavaScript to minifiy
 * @return {String} Minified JavaScript
 */
var jsminc = require('./jsmin.c');
function jsmin(input) {
  return input;
}

// Expose jsmin to the world
module.exports = jsmin;