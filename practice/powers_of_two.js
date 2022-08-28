/**
 * Have the function powersOfTwo(num) take the num parameter being passed which
 * will be an integer and return the string true if it's a power of two. If it's
 * not return the string false. For example if the input is 16 then your program
 * should return the string true but if the input is 22 then the output should
 * be the string false.
 *
 * https://www.coderbyte.com/results/bhanson:Powers%20of%20Two:JavaScript
 *
 * @param  {number} num
 * @return {string} 'true' or 'false'
 */

function powers_of_two(num) {
    let dividedNum = num;
    while(dividedNum >= 1) {
        dividedNum /= 2;
        if(dividedNum === 1) {
            return true;
        } else if (dividedNum < 1) {
            return false;
        }

    }
}

console.log(powers_of_two(16));
console.log(powers_of_two(22));
console.log(powers_of_two(2));
console.log(powers_of_two(4));
console.log(powers_of_two(256));
console.log(powers_of_two(22));
console.log(powers_of_two(257));