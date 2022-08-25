/**
 * Have the function countingMinutesI(str) take the str parameter being passed
 * which will be two times (each properly formatted with a colon and am or pm)
 * separated by a hyphen and return the total number of minutes between the two
 * times. The time will be in a 12 hour clock format. For example: if str is
 * 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the
 * output should be 1320.
 *
 * https://www.coderbyte.com/results/bhanson:Counting%20Minutes%20I:JavaScript
 *
 * @param  {string} str
 * @return {number}
 */

function counting_minutes_i(str) {
    const split_str = str.split(/[:-]/);
    const pre_meridiem = split_str[1].slice(-2);
    const post_meridiem = split_str[3].slice(-2);
    const pre_hour = Number(split_str[0]);
    const post_hour = Number(split_str[2]);
    const pre_minute = Number(split_str[1].slice(0,1));
    const post_minute = Number(split_str[3].slice(0,1));
    let total_minute = 0;

    if(pre_meridiem === post_meridiem) {
        total_minute = (post_hour - pre_hour)*60 + (post_minute - pre_minute);
    } else {
        total_minute = (12 + post_hour - pre_hour)*60 + (post_minute - pre_minute);
    }
    return total_minute;
}

console.log(counting_minutes_i('9:00am-10:00am'));
console.log(counting_minutes_i('1:00pm-11:00am'));
