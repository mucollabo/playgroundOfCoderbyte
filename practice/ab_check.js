/**
 * Have the function abCheck(str) take the str parameter being passed and return
 * the string true if the characters a and b are separated by exactly 3 places
 * anywhere in the string at least once (ie. "lane borrowed" would result in
 * true because there is exactly three characters between a and b). Otherwise
 * return the string false.
 *
 * https://www.coderbyte.com/results/bhanson:AB%20Check:JavaScript
 *
 * @param  {string} str
 * @return {string} 'true' or 'false'
 */

function ab_check(str) {
    let split_str = str.split(/[ab]/);
    for(let e of split_str) {
        if(e.length === 3) return true;
    }
    return false;
}

console.log(ab_check("lane borrowed"));
