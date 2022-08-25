/**
 * Have the function arrayAdditionI(arr) take the array of numbers stored in arr
 * and return the string true if any combination of numbers in the array
 * (excluding the largest number) can be added up to equal the largest number in
 * the array, otherwise return the string false. For example: if arr contains
 * [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 =
 * 23. The array will not be empty, will not contain all the same elements, and
 * may contain negative numbers.
 *
 * https://www.coderbyte.com/results/bhanson:Array%20Addition%20I:JavaScript
 *
 * @param  {array} arr
 * @return {string} true or false
 */

function array_addition_i(arr) {
    let maxNum = Math.max(...arr);
    console.log(`Max Number: ${maxNum}`);
    let arrWOMax = arr.filter(num => num !== maxNum);
    console.log(`arr without Max Num: ${arrWOMax}`);
    for(let num of arrWOMax) {
        maxNum -= num;
        if(arrWOMax.includes(maxNum)) return true;
    }
    return false;
}

console.log(array_addition_i([4, 6, 23, 10, 1, 3]));   // expect the true
console.log(array_addition_i([4, 6, 230, 10, 1, 3]));   // expect the false
