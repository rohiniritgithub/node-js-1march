

//   Path Demo
var path = require('path');
console.log(path.normalize('/foo/bar//baz/asdf/quux/../.'));
console.log(path.join('abd','/bcd/ghgh/..'));

console.log(path.dirname('/foo/bar/baz/asdf/quux.txt'));
console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
console.log(path.dirname('/a/b/index.html'));