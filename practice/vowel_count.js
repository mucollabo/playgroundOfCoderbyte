/**
 * Have the function vowelCount(str) take the str string parameter being passed
 * and return the number of vowels the string contains (ie. "All cows eat grass
 * and moo" would return 8). Do not count y as a vowel for this challenge.
 * @param  {string} str
 * @return {number}
 */

function vowel_count(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let cnt = 0;
    for(let c of str) {
        if(vowels.includes(c)) {
            cnt++;
        }
    }
    return cnt;
}

console.log(vowel_count("All cows eat grass and moo"));
console.log(vowel_count('aeiou'));
console.log(vowel_count('aaayyy'));
console.log(vowel_count('bcd'));
console.log(vowel_count(''));
