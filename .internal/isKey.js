import isSymbol from '../isSymbol.js'

/** Used to match property names within property paths. */
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
const reIsPlainProp = /^\w*$/

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
// 判断value能否做object的key
function isKey(value, object) {
//   数组不可以做key
  if (Array.isArray(value)) {
    return false
  }
  
  const type = typeof value
//   基础类型可以做key
  if (type === 'number' || type === 'boolean' || value == null || isSymbol(value)) {
    return true
  }
//   只包含字母的字符串可以做key，包含[],()的字符串不可以做key，判断是否是object真的key
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object))
}

export default isKey
