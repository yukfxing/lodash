/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', before(5, addContactToList))
 * // => Allows adding up to 4 contacts to the list.
 */
// 限制函数执行次数为n-1
function before(n, func) {
  let result
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  return function(...args) {
//  n > 1 时执行函数   
    if (--n > 0) {
      result = func.apply(this, args)
    }
//  n <= 1 时注销函数
    if (n <= 1) {
      func = undefined
    }
    return result
  }
}

export default before
