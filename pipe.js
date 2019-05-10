function pipe(){
  var args = [].splice.call(arguments, 0)
  var fn = function(callback){
    if(!callback) return fn.value
    args = args.concat([].splice.call(arguments, 1))
    var value = callback.apply(fn.value, args)
    fn.value = value
    fn.args = args
    fn.valueOf = fn.toString = function(){
      return value
    }
    args = [value]
    return fn
  }
  fn.value = args[0]
  fn.args = args
  return fn
}

module.exports = pipe
