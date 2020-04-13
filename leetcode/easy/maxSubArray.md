### Maximum Subarray

Leetcode: https://leetcode.com/problems/maximum-subarray/

## Problem
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

## Example
`Input: [-2,1,-3,4,-1,2,1,-5,4]`

`Output: 6` (because the subarray `[4,-1,2,1]` has the largest sum of `6`)


## Approach & Intuition

This problem is also known as Kadane's Algorithm. The approach we take is that we simply go along the array from left to right and we start adding each element to a collective sum. 

We determine if the element is worth adding based on whether or not our current collective sum is negative or positive. If the sum is positive, we add the element regardless of whether or not the element is positive or negative.

However, if the element is negative and our sum is negative, we replace our sum with the element and continue onwards. 

But why is that? Why do we add the element if our sum is positive but replace it when is negative?

The answer lays in cost. Let's look at the following example:

Suppose our current collective sum is 14 and the element we're looking to add is 5. Well, obviously we would add 5 with 14 because that will give us a larger sum than our current sum.

But if instead of 5, we have -5. We'd still add it because 14 - 5 = 9 > -5. 9 is still larger than -5. So there's no harm in adding -5 because we'd rather have 9 than have -5 as our current sum. Even if the element was -100, we'd rather have 14 - 100 = -86 than have -100.

So let's look at when the sum is negative and the element we're looking at is negative. If our current collective sum is -10 and the element we're looking at is -12, we're going to replace our current collective sum with -12 because having -10 - 12 = - 22 < -12. We'd much rather have -12 than have -22.

And lastly during each iteration, we simply compare the current collective sum to the largest seen collective sum and we update our largest sum variable.


## Code

Javascript:

function maxSubArray(nums) {
    if(nums.length === 1) return nums[0];
    // this records the current sum
    let currSum = nums[0];
    // have a max sum that records the largest sum
    let maxSum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        // update the sum:
        // 1. sum becomes the element if the sum < 0
        // 2. element is added to the sum if the sum > 0
        currSum = currSum < 0 ? nums[i] : currSum + nums[i];

        // update the max sum
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}


`Runtime: O(n)` (loop through every element of the array)

`Space: O(1)` 