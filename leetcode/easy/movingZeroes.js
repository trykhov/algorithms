// Leetcode: https://leetcode.com/problems/move-zeroes/

// Problem: 
// Given an array nums, write a function to move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.


// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]


// Approach:
// We'll use the two pointer technique. We'll start by having a left pointer, i, find the first 0 in the list.
// We then start the right pointer, j, at i + 1. We'll traverse j until the end of the array. 
// If j finds a non-zero, we swap i with j and move i up by 1 (i + 1). 

// Reasoning why we move do i + 1.

// Case 1:
// the value at index i + 1 is 0.

// Before the switch:
// 4, 3, 2, 0, 0, 4, 6, 9
//          i     j

// After the switch (before moving i):
// 4, 3, 2, 4, 0, 0, 6, 9
//          i     j

// Do i + 1 (notice how i is at a zero, so we just need to find another non-zero to swap):
// 4, 3, 2, 4, 0, 0, 6, 9
//             i  j


// Case 2:
// The value at index + 1 is non-zero

// Before the switch:
// 4, 3, 2, 0, 5, 4, 6, 9
//          i  j   

// After the swap:
// 4, 3, 2, 5, 0, 4, 6, 9
//          i  j

// Do i + 1 (notice how i is at a zero as well):
// 4, 3, 2, 5, 0, 4, 6, 9
//             i
//             j

// Code:
// Runtime: O(n)
// Space: O(1)
function moveZeroes(nums) {
    let i = 0;
    // find the first zero value
    while(nums[i] != 0 && i < nums.length) {
        i += 1;
    }
    for(let j = i + 1; j < nums.length; j++) {
        // have j find the non-zero values
        if(nums[j] != 0) {
            // swap the non-zero value with value at i
            [nums[i], nums[j]] = [nums[j], nums[i]];
            // increment i by 1
            i += 1;
        }
    }
    return nums;
};