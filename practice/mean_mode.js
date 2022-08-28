/**
 * Have the function meanMode(arr) take the array of numbers stored in arr and
 * return 1 if the mode equals the mean, 0 if they don't equal each other (ie.
 * [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
 * The array will not be empty, will only contain positive integers, and will
 * not contain more than one mode.
 *
 * https://www.coderbyte.com/results/bhanson:Mean%20Mode:JavaScript
 *
 * @param  {array} arr
 * @return {number}
 */

function mean_mode(arr) {
    const mean = arr.reduce((pre, curr) => pre + curr)/arr.length;
    return arr.includes(mean)? 1:0;;
}

console.log(mean_mode([1,2,3,4,]));
console.log(mean_mode([7, 7, 7, 7]));
console.log(mean_mode([5, 3, 3, 3, 10]));
console.log(mean_mode([5, 3, 3, 3, 1]));
