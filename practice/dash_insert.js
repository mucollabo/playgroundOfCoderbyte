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
    let split_str = str.split('');
    for(let i=0;i<split_str.length-1;i++) {
        if((Number(split_str[i])+Number(split_str[i+1]))%2 === 0 && Number(split_str[i])%2 !== 0) {
            split_str.splice(i+1, 0, '-')
        }
    }
    return split_str.join('');
}

console.log(dash_insert('454793'));
console.log(dash_insert('02468'));
console.log(dash_insert('123456789'));
console.log(dash_insert(''));
console.log(dash_insert('7'));
console.log(dash_insert('45794793'));