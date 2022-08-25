/**
 * Have the function checkNums(num1,num2) take both parameters being passed and
 * return the string true if num2 is greater than num1, otherwise return the
 * string false. If the parameter values are equal to each other then return the
 * string -1.
 * @param  {number} num1
 * @param  {number} num2
 * @return {string}
 */

function check_nums(num1, num2) {
    if(num1 < num2) {
        return true;
    } else if(num1 > num2) {
        return false;
    } else return -1;
}

// expect true
console.log(check_nums(1, 2));
console.log(check_nums(0, 1));
console.log(check_nums(-1, 0));
console.log(check_nums(-1, 1));
// expect -1
console.log(check_nums(1, 1));
console.log(check_nums(10, 10));
console.log(check_nums(0, 0));
console.log(check_nums(-1, -1));
// expect false
console.log(check_nums(2, 1));
console.log(check_nums(200, 5));
console.log(check_nums(0, -1));
console.log(check_nums(1, 0));
