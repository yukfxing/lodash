import createMathOperation from './.internal/createMathOperation.js'

/**
 * Adds two numbers.
 *
 * @since 3.4.0
 * @category Math
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * add(6, 4)
 * // => 10
 */

// 柯里化
// 判断参数是否有字符串，如果有字符串将参数全部转换为字符串，否则转换为数字，根据函数计算结果
const add = createMathOperation((augend, addend) => augend + addend, 0)

export default add
