/**
 * Have the function wordCount(str) take the str string parameter being passed
 * and return the number of words the string contains (e.g. "Never eat shredded
 * wheat or cake" would return 6). Words will be separated by single spaces.
 * @param  {string} str
 * @return {number}
 */

function word_couunt(str) {
    return str === ''? 0:str.split(' ').length
}

console.log(word_couunt("Never eat shredded wheat or cake"));
console.log(word_couunt(""));
