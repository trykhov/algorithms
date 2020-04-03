// Leetcode: https://leetcode.com/problems/maximum-subarray/

// Problem:
// Given an integer array nums, find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.


// Example:
// Input: [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

// Explanation:
// Subarray [4,-1,2,1] has the largest sum = 6


// Approach:
// We go along the array and start adding each element to a collective sum.
// We determine if a value is worth adding to our current sum if our current sum is less than 0.
// This is because if we add a value less than 0 but our sum is greater than 0, our sum will be greater than the number we're adding.
// But if our sum is negative (less than 0), then we change our sum to that number and continue.

// ex. suppose our current sum is -9 and the next number is -10. Instead of adding -10 to -9, which is -19, we simply just make our 
//     new sum -10 because -19 < -10. But our current max sum is still -9.

// Every step, we update our max sum answer.

// Code
// Runtime: O(n)
// Space: O(1)
function maxSubArray(nums) {
    if(nums.length === 1) return nums[0];
    let currSum = nums[0];
    let maxSum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        // if the currSum < 0, then currSum + nums[i] < nums[i] (regardless if nums[i] is positive or negative)
        // so we select the largest, which is nums[i]

        // ex. currSum = -9, nums[i] = -10 => currSum + nums[i] < nums[i] => -9 + -10 < -9
        currSum = currSum < 0 ? nums[i] : currSum + nums[i];

        // even if nums[i] was negative while currSum > 0, we're still keeping the max of currSum
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}