/**
 * Have the function dashInsert(str) insert dashes ('-') between each two odd
 * numbers in str. For example: if str is 454793 the output should be 4547-9-3.
 * Don't count zero as an odd number.
 *
 * https://www.coderbyte.com/results/bhanson:Dash%20Insert:JavaScript
 *
 * @param  {string} str
 * @return {string}
 */

function dash_insert(str) {
    let result = [];
    for(let i=0;i<str.length;i++) {
        result.push(str[i]);
        if((Number(str[i])+Number(str[i+1]))%2 === 0 && Number(str[i])%2 !== 0) {
            result.push('-');
        }
    }
    return result.join('');
}

console.log(dash_insert('454793'));     // expect 4547-9-3
console.log(dash_insert('02468'));      // expect 02468
console.log(dash_insert('123456789'));  // expect 123456789
console.log(dash_insert(''));           // expect ''
console.log(dash_insert('7'));          // expect 7
console.log(dash_insert('45794793'));   // expect 45-7-947-9-3
