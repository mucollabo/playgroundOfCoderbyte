/**
 * Have the function letterCapitalize(str) take the str parameter being passed
 * and capitalize the first letter of each word. Words will be separated by only
 * one space.
 * @param  {string} str
 * @return {string}
 */

function letter_capitalize(str) {
    const split_str = str.split(' ');
    const upperStr = [];

    for(let i=0; i<split_str.length; i++) {
        upperStr.push(split_str[i].charAt(0).toUpperCase() + split_str[i].slice(1));
    }

    return upperStr.join(' ');
}

console.log(letter_capitalize('hello charles how are you'));
console.log(letter_capitalize('handles empty string'));
console.log(letter_capitalize('capitalizes first letter of each word'));
console.log(letter_capitalize('capitalizes multiple words'));
console.log(letter_capitalize('ignores non alphabetic characters'));
