// Leetcode: https://leetcode.com/problems/subsets/


// Problem: Find the powerset of an array of distinct integers
// Note: The solution set must not contain duplicate subsets.


// Approach:
// Solution screams recursion. Should be broken down.
// subsets([3]) => [[], [3]] (every set has the empty set)
// subsets([2,3]) => [[], [2], [3], [2,3]]


// Runtime: O(n!)
// Space: O(n!)

function subsets(nums) {
    // nums is an Array
    let res = [[]]; // every subset has the empty set
    if(nums.length === 1) return [[], [nums[0]]]; // just return the number with the empty set
    for(let i = 0; i < nums.length; i++) {
        // get the subsets of the array that's from i to nums.length
        let subset = subsets(nums.slice(i + 1));
        // take the i-th element and add it to each array element in subset
        subset.forEach(sub => res.push([nums[i], ...sub])); // use the spread because each element of subset is an array
    }
    return res;
}

