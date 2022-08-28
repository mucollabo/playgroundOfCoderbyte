/**
 * Have the function secondGreatLow(arr) take the array of numbers stored in arr
 * and return the second lowest and second greatest numbers, respectively,
 * separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the
 * output should be 12 98. The array will not be empty and will contain at least
 * 2 numbers. It can get tricky if there's just two numbers!
 *
 * https://www.coderbyte.com/results/bhanson:Second%20GreatLow:JavaScript
 *
 * @param  {array} arr
 * @return {string}
 */

function second_great_low(arr) {
    const setSortArr = [... arr].sort((a, b) => a - b);
    console.log(setSortArr);
    let secLow = setSortArr[1];
    for(let i = 1; i < arr.length; i++) {
        if(setSortArr[i] !== setSortArr[0]) {
            secLow = setSortArr[i];
            break;
        }
    }
    let secGreat = setSortArr[arr.length-2];
    for(let j = arr.length-2; j >= 0; j--) {
        if(setSortArr[j] !== setSortArr[arr.length-1]) {
            secGreat = setSortArr[j];
            break;
        }
    }
    return `${secLow} ${secGreat}`;
}

console.log(second_great_low([7, 7, 12, 98, 106]));
console.log(second_great_low([80, 80]));
console.log(second_great_low([5, 1]));
