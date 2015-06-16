var glob = require('glob')
var fs = require('fs')
var blacklist = ['it.only(', 'iit(', 'describe.only(']

function read(path) {
  return {
    contents: fs.readFileSync(path, 'utf8'),
    path: path
  }
}

function checkItemFactory(file) {
  return function(item) {
    var idx = file.contents.indexOf(item)
    if(idx !== -1) {
      file.invalid = file.invalid || {}
      file.invalid[item.slice(0, -1)] = true
    }
    return file
  };
}

function validate(file) {
  blacklist.forEach(checkItemFactory(file))
  return file
}

function globAll(files, pattern) {
  return files.concat(glob.sync(pattern))
}

module.exports = function(patterns) {
  return patterns
  .reduce(globAll, [])
  .map(read)
  .map(validate)
};