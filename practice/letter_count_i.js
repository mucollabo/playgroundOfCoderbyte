/**
 * Have the function letterCountI(str) take the str parameter being passed and
 * return the first word with the greatest number of repeated letters. For
 * example: "Today, is the greatest day ever!" should return greatest because it
 * has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there
 * are no words with repeating letters return -1. Words will be separated by
 * spaces.
 *
 * https://www.coderbyte.com/results/bhanson:Letter%20Count%20I:JavaScript
 *
 * @param  {string} str
 * @return {string} or -1
 */

function letter_count_i(str) {
    const spt_str = str.toLowerCase().split(' ');
    let eq_cnt = 0;
    let grNumWord = '';
    for(let word of spt_str) {
        if(eq_cnt < word.length - (new Set(word)).size) {
            eq_cnt = eq_cnt < word.length - (new Set(word)).size;
            grNumWord = word;
            return grNumWord;
        }
    }
    if(eq_cnt === 0) {grNumWord = '-1'}
    return grNumWord;
}

console.log(letter_count_i("Today, is the greatest day ever!"));
console.log(letter_count_i('abc zzzzfdaf mmmmadffad'));
console.log(letter_count_i('abcd ef ghij klmno p qrstuvw xyz'));
console.log(letter_count_i(''));
