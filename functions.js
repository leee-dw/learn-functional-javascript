function _filter(users = [], predicate) {
  var newList = []
  _each(users, val => {
    if (predicate(val)) newList.push(val)
  })
  return newList
}



function _map(list = [], mapper) {
  var newList = []
  _each(list, val => {
    newList.push(mapper(val))
  })
  return newList
}




function _each(list, iter) {
  var keys = _keys(list)

  for (var i = 0, len = keys.length; i < len; i++) {
    iter(list[keys[i]])
  }
  return list
}



function _curry(fn) {
  return function(a, b) {
    return arguments.length == 2 ? fn(a, b) : function(b) { return fn(a, b) }
  }
}



function _curryr(fn) {
  return function(a, b) {
    return arguments.length == 2 ? fn(a, b) : function(b) { return fn(b, a) }
  }
}




function _rest(list, num) {
  var slice = Array.prototype.slice
  return slice.call(list, num || 1)
}



function _reduce(list, iter, memo) {
  if (arguments.length == 2) {
    memo = list[0]
    list = _rest(list)
  }
  _each(list, function(val) {
    memo = iter(memo, val)
  })
  return memo
}



function _pipe() {
  var fns = arguments
  return function(arg) {
    return _reduce(fns, function(arg, fn) {
      return fn(arg)
    }, arg)
  }
}



function _go(arg) {
  var fns = _rest(arguments)
  return _pipe.apply(null, fns)(arg)
}




var _get = _curryr((obj, key) => obj == null ? undefined : obj[key])
var _map = _curryr(_map)
var _filter = _curryr(_filter)

var _length = _get('length')






console.log(_keys({ name: 'ID', age: 33 }))
console.log(_keys([1, 2, 3, 4]))
console.log(_keys(10))
console.log(_keys(null))


function _isObj(obj) {
  return typeof obj == 'object' && !!obj
}


function _keys(obj) {
  return _isObj(obj) ? Object.keys(obj) : []
}
