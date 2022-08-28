/**
 * Have the function simpleSymbols(str) take the str parameter being passed and
 * determine if it is an acceptable sequence by either returning the string true
 * or false. The str parameter will be composed of + and = symbols with several
 * letters between them (ie. ++d+===+c++==a) and for the string to be true each
 * letter must be surrounded by a + symbol. So the string to the left would be
 * false. The string will not be empty and will have at least one letter.
 *
 * https://www.coderbyte.com/results/bhanson:Simple%20Symbols:JavaScript
 *
 * @param  {string} str
 * @return {string} 'true' or 'false'
 */

function simple_symbols(str) {
    const re = new RegExp(/\w+/g);
    const matStr = str.match(re);
    for(let letter of matStr) {
        if(str.includes(`+${letter}+`)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

console.log(simple_symbols('++d+===+c++==+a+'));
console.log(simple_symbols('+d===+a+'));
console.log(simple_symbols('++d+===+c++==a'));
console.log(simple_symbols('+d++===+a++'));
