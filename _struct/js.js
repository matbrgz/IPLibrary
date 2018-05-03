const dirTree = require('directory-tree');
const Tree = dirTree('en');

console.dir(Tree);

var fs = require('fs');
fs.writeFile("test.txt", JSON.stringify(Tree), function(err) {
    if (err) {
        console.log(err);
    }
});
