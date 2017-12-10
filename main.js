var fs = require('fs')

var file = fs.readFileSync('data.tsv')

var lenSorted = file.toString().split("\n").map(t=> t.split("\t") ).sort((a,b)=> (b[0].length > a[0].length) > 0 ? -1 : 1 )

fs.writeFileSync('result.tsv', lenSorted.map(t=> t.join("\t") ).join("\n"))
