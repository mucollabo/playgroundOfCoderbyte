/**
 * Have the function palindrome(str) take the str parameter being passed and
 * return the string true if the parameter is a palindrome, (the string is the
 * same forward as it is backward) otherwise return the string false. For
 * example: "racecar" is also "racecar" backwards. Punctuation and numbers will
 * not be part of the string.
 * @param  {string} str
 * @return {string}
 */

function panlindrome(str) {
    const rev_str = str.split('').reverse().join('');
    return str === rev_str? true:false;
}

console.log(panlindrome("racecar"));
console.log(panlindrome("ferari"));
