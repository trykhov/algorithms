// Suppose you're given an array of POSITIVE integers
// You're asked to find the maximum sum of the array such that the sum is composed of non-adjacent elements

// Approach one
// Time: O(n)
// Space: O(n)

maxSumNonAdjacent = array => {
    // let's knock out the base cases first
    if(array.length === 0) return 0; // there's nothing there
    if (array.length === 1) return array[0]; // just returns the first element
    if(array.length == 2) return Math.max(array[0], array[1]);
    // we're gonna do a dynamic programming approach
    const dp = new Array(array.length); // this will keep track of our maximum sums
    dp[0] = array[0]; // the first value
    dp[1] = Math.max(array[0], array[1]);
    for(let i = 2; i < array.length; i += 1) {
        // at any given index, we must consider two things
        // the previous non-adjacent element added with the current element is the current maximum sum
        // OR the previous value before has the greater sum
        dp[i] = Math.max(dp[i-2] + array[i], dp[i-1]) 
    }
    return dp[array.length - 1];
};

// Better approach
// Time: O(n)
// Space: O(1)

function maxSumNonAdjacentConstantSpace(array) {
    // we'll apply the same base bases
    if(array.length === 0) return 0; // there's nothing there
    if (array.length === 1) return array[0]; // just returns the first element
    if(array.length == 2) return Math.max(array[0], array[1]);
    // notice in our dynamic programming approach, we really only used two elements to keep track of our previous sums
    // this is constant space because it's not dependent on the length of the input array
    const previous = new Array(2); 
    previous[0] = array[0];
    previous[1] = Math.max(array[0], array[1]);
    let maxSum = 0;
    for(let i = 2; i < array.length; i += 1) {
        maxSum = Math.max(previous[0] + array[i], previous[1]);
        previous[0] = previous[1];
        previous[1] = maxSum;
    }
    return maxSum
}