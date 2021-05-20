import upperFirst from './upperFirst.js'
import toString from './toString.js'

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * capitalize('FRED')
 * // => 'Fred'
 */
// 字符串转小写之后再将首字母大写
const capitalize = (string) => upperFirst(toString(string).toLowerCase())


export default capitalize
