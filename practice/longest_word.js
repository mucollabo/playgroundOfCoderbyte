/**
 * Have the function longestWord(sen) take the sen parameter being passed and
 * return the largest word in the string. If there are two or more words that
 * are the same length, return the first word from the string with that length.
 * Ignore punctuation and assume sen will not be empty.
 * @param  {string} sen
 * @return {string}
 */

function longest_word(sen) {
    const re = /\w$/;
    let max = 0;

    sen.split(' ').map((element) => {
        console.log(re.exec(element));
        if(element.length <= max) {return;}

        if(re.test(element)) {
            max = element.length;
            sen = element;
        }

    })
    return sen;
}

// console.log(longest_word('thethethe quick brown fox jumped'));
// console.log(longest_word('the quick brown fox jumpedjumped'));
// console.log(longest_word('the quick brownbrownbrown fox jumped'));
// console.log(longest_word('the quick brown fox jump'));
// console.log(longest_word('THE QUICK BROWNBROWNBROWN FOX JUMPED'));
// console.log(longest_word('the quick Brown fox jump'));
// console.log(longest_word('the Quick Brown fox jump'));
// console.log(longest_word('the Quick brown fox jump'));
// console.log(longest_word('THE QUICK BRown fox jump'));
console.log(longest_word('the$%!#$.quick*brown fox jump*!#$!@$!$!!%!00an'));