import similarity = require("similarity")

similarity() // $ExpectError
similarity('left') // $ExpectError
similarity('left', 'right') // $ExpectType number
similarity('left', 'right', {sensitive: true}) // $ExpectType number
