var fs = require('fs'),
    jsminc = fs.readFileSync(__dirname + '/jsmin.c', 'utf8');

// Strip out includes
jsminc = jsminc.replace(/#include[^\n]+\s*/g, '');

// Replace static int with 'the' prefixes with vars
jsminc = jsminc.replace(/static int\s+(the[^\n]+)/g, function (_, varStr) {
  return 'var ' + varStr;
});

// Throw in an EOF before the first theA
jsminc = jsminc.replace('var theA;', 'var EOF = {};\nvar theA;');

// Replace static void and static int with function
jsminc = jsminc.replace(/static void[^A-Za-z]*/g, 'function ');
jsminc = jsminc.replace(/static int[^A-Za-z]*/g, 'function ');
jsminc = jsminc.replace(/extern int[^A-Za-z]*/g, 'function ');

fs.writeFileSync(__dirname + '/../lib/jsmin.c.js', jsminc, 'utf8');