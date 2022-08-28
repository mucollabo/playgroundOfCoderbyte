/**
 * Have the function numberAddition(str) take the str parameter, search for all
 * the numbers in the string, add them together, then return that final number.
 * For example: if str is "88Hello 3World!" the output should be 91. You will
 * have to differentiate between single digit numbers and multiple digit numbers
 * like in the example above. So "55Hello" and "5Hello 5" should return two
 * different answers. Each string will contain at least one letter or symbol.
 *
 * https://www.coderbyte.com/results/bhanson:Number%20Addition:JavaScript
 *
 * @param  {string} str
 * @return {number}
 */

function number_addition(str) {
    const re = /\d+/g;
    const nums = str.match(re);
    return nums.reduce((pre, curr) => Number(pre) + Number(curr));
}

console.log(number_addition("88Hello 3World!"));
console.log(number_addition('5fad4fadfa6'));
console.log(number_addition('28ad 11 fd as22dfa19'));
