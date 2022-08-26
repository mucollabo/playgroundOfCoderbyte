/**
 * Have the function exOh(str) take the str parameter being passed and return
 * the string true if there is an equal number of x's and o's, otherwise return
 * the string false. Only these two letters will be entered in the string, no
 * punctuation or numbers. For example: if str is "xooxxxxooxo" then the output
 * should return false because there are 6 x's and 5 o's.
 * @param  {string} str
 * @return {string}
 */

function ex_oh(str) {
    let x_count = str.split('').filter(e => e === 'x').length;
    let o_count = str.split('').filter(e => e === 'o').length;
    return (x_count === o_count)? true:false;
}

console.log(ex_oh("xooxxxxooxo"));
console.log(ex_oh('oooxxoooxxxx'));
console.log(ex_oh('x'));
console.log(ex_oh('o'));
