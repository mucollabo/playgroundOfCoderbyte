/**
 * Have the function firstFactorial(num) take the num parameter being passed and
 * return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the
 * test cases, the range will be between 1 and 18 and the input will always be
 * an integer.
 * @param  {number} num
 * @return {number}
 */

function first_factorial(num) {
    let factorial = 1;
    for(let i=num; i >=2; i--) {
        factorial *= i;
    }
    return factorial;
}

console.log(first_factorial(4));
console.log(first_factorial(1));
console.log(first_factorial(2));
console.log(first_factorial(3));
console.log(first_factorial(18));
