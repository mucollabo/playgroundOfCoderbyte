/**
 * Have the function divisionStringified(num1,num2) take both parameters being
 * passed, divide num1 by num2, and return the result as a string with properly
 * formatted commas. If an answer is only 3 digits long, return the number with
 * no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789
 * and num2 is 10000 the output should be "12,346".
 *
 * https://www.coderbyte.com/results/bhanson:Division%20Stringified:JavaScript
 *
 * @param  {number} num1
 * @param  {number} num2
 * @return {string}
 */

function division_stringfied(num1, num2) {
    if(num2 === 0) return 'undefined';

    const valueStr = String(Math.round(num1/num2));
    const result = [];

    if(valueStr.length < 4) {
        return valueStr;
    } else {
        for(let i = valueStr.length-1, cnt=1;i >= 0;i--, cnt++) {
            result.unshift(valueStr.split('')[i]);
            if(cnt%3 === 0) {result.unshift(',')};
        }
        return result.join('');
    }
}

console.log(division_stringfied(123456789, 10000));
console.log(division_stringfied(2, 3));
console.log(division_stringfied(123456789, 10));
console.log(division_stringfied(123456789, 0));