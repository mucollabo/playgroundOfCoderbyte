/**
 * Have the function arithGeo(arr) take the array of numbers stored in arr and
 * return the string "Arithmetic" if the sequence follows an arithmetic pattern
 * or return "Geometric" if it follows a geometric pattern. If the sequence
 * doesn't follow either pattern return -1. An arithmetic sequence is one where
 * the difference between each of the numbers is consistent, where as in a
 * geometric sequence, each term after the first is multiplied by some constant
 * or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2,
 * 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be
 * entered, and no array will contain all the same elements.
 *
 * https://www.coderbyte.com/results/bhanson:Arith%20Geo:JavaScript
 *
 * @param  {array} arr
 * @return {string} or -1 on failure
 */

// 4, 12, 36 -> 8, 24 -> 16

function arith_geo(arr) {
    let diff_btw = [];
    let result = '';

    for(let i=0; i<arr.length-1; i++) {
        diff_btw.push(arr[i+1] - arr[i]);
    }

    if(arr.length <= 2) {
        result = -1
    } else if(Array.from(new Set(diff_btw)).length === 1) {
        result = "Arithmetic";
    } else {
        result = diff_btw.every((value) => {
            if(value % arr[diff_btw.indexOf(value)] === 0) {
                return true;
            }
        })? 'Geometric':-1;
    }
    return result;
}

console.log(arith_geo([2,4,6,8]));
console.log(arith_geo([2,6,18,54]));
console.log(arith_geo([5,9,14,72]));
console.log(arith_geo([3, 4, 5, 6]));
console.log(arith_geo([1, 6, 36, 216, 1296]));
console.log(arith_geo([1, 2, 3, 5]));
console.log(arith_geo([]));
console.log(arith_geo([1]));