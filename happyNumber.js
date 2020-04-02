// Leetcode: https://leetcode.com/problems/happy-number/

// Description: 
// A happy number is a number defined by the following process: 
// Starting with any positive integer, replace the number by the sum of the squares of its digits, 
// and repeat the process until the number equals 1 (where it will stay), 
// or it loops endlessly in a cycle which does not include 1. 
// Those numbers for which this process ends in 1 are happy numbers.

// Example"
// Input: 19
// Output: true
// Explanation: 
// (1 ^ 2) + (9 ^ 2) = 82
// (8 ^ 2) + (2 ^ 2) = 68
// (6 ^ 2) + (8 ^ 2) = 100
// (1 ^ 2) + (0 ^ 2) + (0 ^ 2) = 1


// Approach: 
// We know that we're going to be using a loop where we have to cycle endlessly until we get a sum of digits squared that equal 1.
// However, the question is posed: 'What if it goes on forever? How do we know when to stop?'
// This question is tricky because it entails a little knowledge of math where there are numbers that will have repeated sums. 
// For example, if we have a number and the sum of its digits squared has been seen, then we fall into a cycle. 
// Now the question is how do we detect that cycle?



// Method 1: Using Hash tables
function isHappy(n) {
    let copyN = n; // don't want to change the input
    let hash = {};
    while(true) {
        let hold = copyN; // have a placeholder because copyN will be changing
        if(hash[hold] !== undefined) return false; // if the sum has been seen, we'll get an infinite loop
        let sum = 0; // always reset the sum to 0 before entering the loop
        while(copyN > 0) { // gets the sum of the digits squared
            sum += (copyN % 10) ** 2;
            copyN = Math.floor(copyN / 10);
        }
        if(sum === 1) return true; // if the sum is 1, we determine n is a happy number
        hash[hold] = sum; // store the number into the hash table to see if it'll be seen again
        copyN = sum; // the current sum is now the new n
    }
}


// Method 2: Linked List Cycle Detection method
// Note: We're not actually using a linked list, but rather a similar method to detect if there's a cycle
// Look up: Tortoise and Hare (Floyd's Algorithm)


// the idea is that the hare is supposed to move faster than the tortoise. If there's a cycle, there will be at one or various points
// where the tortoise and the hare are at the same spot (excluding the beginning). If that's the case, then there is a cycle.
// But if the hare reaches the finish line first, then we found our happy number.
function isHappy(n) {
    let tortoise = n;
    let hare = n;
    do {
        tortoise = digitSum(tortoise);
        hare = digitSum(digitSum(hare)); // moves "faster"
        if(hare === 1) return true;
    } while(tortoise !== hare);
    return false;
}

// helper function to find the sum of the digits squared
function digitSum(n) {
    let sum = 0;
    let copyN = n; // don't change in the input
    while(copyN > 0) {
        sum += (copyN % 10) ** 2;
        copyN = Math.floor(copyN / 10);
    }
    return sum;
}