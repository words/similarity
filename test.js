var test = require('tape')
var similarity = require('.')

test('similarity', function(t) {
  t.equal(similarity(null, 'food'), 0)
  t.equal(similarity('food', null), 0)
  t.equal(similarity('', 'food'), 0)
  t.equal(similarity('food', ''), 0)
  t.equal(similarity('food', 'food'), 1)
  t.equal(similarity('food', 'fool'), 0.75)
  t.equal(similarity('ding', 'plow'), 0)
  t.equal(similarity('chicken', 'chick'), 5 / 7)
  t.equal(similarity('es6-shim', 'es6 shim'), 7 / 8)
  t.equal(similarity('ES6 Shim', 'es6-shim'), 7 / 8, 'case insensitive')
  t.equal(
    similarity('ES6 Shim', 'es6-shim', {sensitive: true}),
    4 / 8,
    'case sensitive'
  )
  t.end()
})
