// Determine if any 3 integers in an array sum to a given value.

// Example:
// [-3,3,-1,0,2,-2,1] , target = 0;
// Solution: [-3, 3, 0] or [-3, 2, 1] ...

// Questions to ask:
// 1. Is there repetition? Can we say arr[0] + arr[0] + arr[0] is valid?
// 2. Am I expected to leave the array alone? Meaning I can't sort the array.
// 3. What is my expected output? Boolean? Combination? (going to assume boolean)

// Naive Approach:
// Time Complexity: O(n^3)
// Space Complexity: O(1)
function threeSum(arr, target) {
    // idea: look at every combination
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            for(let k = j; k < arr.length; k++) {
                if(arr[i] + arr[j] + arr[k] === target) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Better Approach (Not optimal)
// Time Complexity: O(n ^ 2 * log (n))
// Space Complexity: O(1)
function threeSum(arr, target) {
    // idea: use two elements and then do binary search to find it
    for(let i = 0; i < arr.length; i++ ) {
        for(let j = i; j < arr.length; j++) {
            let lastElement = target - (arr[i] + arr[j]);
            if(binarySearch(arr, lastElement)) {
                return true;
            }
        }
    }
    return false;
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if(arr[mid] == target) {
            return true;
        } else if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

// Better Solution (not optimal)
// Time Complexity: O(n ^ 2)
// Space Complexity: O(n)

function threeSum(arr, target) {
    // we'll use a hash to find the last value
    let hash = {};
    // first fill the hash
    for(let i = 0; i < arr.length; i++) {
        hash[arr[i]] = true;
    }
    // using every pair, see if their sum from the difference of the target is in the hash
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            let diff = target - sum;
            if(hash[diff]) {
                return true;
            }
        }
    }
    return false;
}

// Optimal Solution
// Time Complexity: O(n ^ 2)
// Space Complexity: O(1)

function threeSum(arr, target) {
    arr.sort((a,b) => a - b); // sort the array;
    // starting from i, the left traverse the array until it passes right
    for(let i = 0; i < arr.length; i++) {
        let left = i;
        let right = arr.length - 1;
        while(left <= right) {
            // we take the sum of the triplets
            let sum = arr[i] + arr[left] + arr[right];
            if(sum == target) {
                return true;
            } else if(sum < target) {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }
    return false;
}
