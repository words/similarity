'use strict'

var levenshtein = require('levenshtein-edit-distance')

module.exports = similarity

function similarity(a, b, options) {
  var opts = options || {}
  var sensitive = opts.sensitive
  var left = casing(a || '', sensitive)
  var right = casing(b || '', sensitive)
  if (left === right) return 1
  if (left.length === 0 || right.length === 0) return 0
  var distance = levenshtein(left, right)
  var longest = Math.max(left.length, right.length)
  return (longest - distance) / longest
}

function casing(value, sensitive) {
  return sensitive ? value : value.toLowerCase()
}
