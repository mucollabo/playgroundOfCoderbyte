/**
 * Have the function letterChanges(str) take the str parameter being passed and
 * modify it using the following algorithm. Replace every letter in the string
 * with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 * Then capitalize every vowel in this new string (a, e, i, o, u) and finally
 * return this modified string.
 * @param  {string} str
 * @return {string}
 */

function letter_changes(str) {
    let modifiedStr = [];
    const vowel = ['a', 'e', 'i', 'o', 'u'];

    for(let i=0; i<str.length; i++) {
        if(str[i] === 'z') {
            modifiedStr.push('a');
        } else if(str[i] === ' ') {
            modifiedStr.push(' ');
        } else {
            modifiedStr.push(String.fromCharCode(str.charCodeAt(i)+1));
        }
        if(vowel.includes(modifiedStr[i])) {
            modifiedStr.splice(i, 1, String.fromCharCode(modifiedStr.join('').charCodeAt(i)-32));
        }
    }
    return modifiedStr.join('');
}

console.log(letter_changes('abcdefgz'));
console.log(letter_changes('handles empty string'));
console.log(letter_changes('replaces letter with next letter'));
console.log(letter_changes('capitalizes vowels'));
console.log(letter_changes('handles non alphabetic characters'));
console.log(letter_changes('handles uppercase letters in input'));
console.log(letter_changes('shifts letters by given key'));
console.log(letter_changes('correctly detects only alphabetic characters'));
console.log(letter_changes('correctly detects non alphabetic characters'));
console.log(letter_changes('correctly detects all uppercase characters'));
console.log(letter_changes('correctly detects all lowercase characters'));
console.log(letter_changes('capitalizes vowels correctly'));

