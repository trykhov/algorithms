// Leetcode: https://leetcode.com/problems/self-dividing-numbers/

// Problem:
// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Also, a self-dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example: 

// Input: 
// left = 1, right = 22

// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

// Approach:
// Since you're given a left and right bound, we're gonna to take each number and see if it is a self-dividing number.
// In order to get the digits, rather than turning it into a string and turning it back into a number, we can simply do some math.
// We can get the last digit of a number by taking the num % 10. If the number is NOT divisible by that digit, then immediately break out of the loop
// and go to the next number. If it is, divide the number by 10 and repeat the process. Add them to the resulting list.

// Code
// Runtime: O(kn) (n being the distance between left and right, k being each number length within the range of [left, right])
// Space: O(1) (not including the result)

function selfDividingNumber(left, right) {
    let solution = []; 
    for(let i = left; i < right + 1; i++) {
        let num = i; // we need a dummy variable to change
        while(num > 0) {
            let digit = num % 10; // get the last digit
            if(i % digit !== 0) break;
            num = Math.floor(num / 10); // get the next digit
        }
        if(num === 0) solution.push(i); // if it breaks out of the loop where num = 0, then add to list
    }
    return solution;
}