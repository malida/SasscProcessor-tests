
class StringConcatenator
  constructor: (@array) ->

  concat: () ->
    buf = ''
    for s in @array
      buf += s
    buf


arr = ['some', 'other', 'something else', '   arst']

concater = new StringConcatenator arr

console.log(concater.concat())
