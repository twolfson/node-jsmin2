/**
 * jsmin - Refer to LICENSE in base directory
 * @param {String} input JavaScript to minifiy
 * @return {String} Minified JavaScript
 */
var jsminc = require('./jsmin.c');
function jsmin(input) {
  var EOF = -1,
      stdin = {
        'index': 0,
        'end': input.length,
        'read': function (len) {
          // For now only handle len = 1
          if (len !== 1) {
            throw new Error('You can only read one character from input at a time.');
          }

          // If we are at the end, return EOF (-1)
          var index = stdin.index;
          if (index === stdin.end) {
            return EOF;
          }

          // Read the input at our index
          var char = input[index];

          // Increment our index
          stdin.index = index + 1;

          // Return char
          return char;
        }
      },
      output = '',
      options = {
        'error': '',
        'stdout': function (str) {
          // Add the string to output
          output += str;
        },
        'stderr': function (err) {
          // Add the error to output
          options.error += err;
        },
        'exit': function (code) {
          // Throw the collective error
          throw new Error(options.error);
        }
      };

  // Run jsminc
  jsminc(stdin, options);

  // Return the output
  return output;
}

// Expose jsmin to the world
module.exports = jsmin;