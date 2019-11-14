'use strict'

var levenshtein = require('levenshtein-edit-distance')

module.exports = similarity

function similarity(a, b) {
  if (!a || !b || a.length === 0 || b.length === 0) return 0
  if (a === b) return 1
  var d = levenshtein(a.toLowerCase(), b.toLowerCase())
  var longest = Math.max(a.length, b.length)
  return (longest - d) / longest
}
