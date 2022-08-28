/**
 * Have the function swapCase(str) take the str parameter and swap the case of
 * each character. For example: if str is "Hello World" the output should be
 * hELLO wORLD. Let numbers and symbols stay the way they are.
 *
 * https://www.coderbyte.com/results/bhanson:Swap%20Case:JavaScript
 *
 * @param  {string} str
 * @return {string}
 */

function swap_case(str) {
    let result = '';

    for(let i=0;i<str.length;i++) {
        if(str.charCodeAt(i) < 97) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }
    return result;
}

console.log(swap_case("Hello 1 World."));
console.log(swap_case('abcz'));
console.log(swap_case('ZABC'));
console.log(swap_case('the QUICK Brown foX'));
console.log(swap_case('the $&@!QUICK &@!Brown&@! foX'));
// console.log(swap_case());
