// Heaps are binary trees with the condition: 
// 1. The root is either the smallest value (min-heap) or max value (max-heap)
// 2. the children are min-heaps / max-heaps respectively

// Heap Sort
// Time Complexity: O(n * log(n))
// Space Complexity: O(1) 
function heapSort(arr) {
    let n = arr.length - 1;
    buildHeap(arr); // we build a max heap first because the highest value is the root (index = 0)
    while(n > 0) {
        // swap the root with n so the largest value is at the end;
        swap(arr, 0, n);
        n -= 1; // we move n to the next end
        maxHeapify(arr, 0, n); // after swapping, we make sure the array from 0 to n is a heap
    }
}


// Build Heap
// Time Complexity: O(n * log(n))
// Space Complexity: O(1) 
function buildHeap(arr) {
    // the heap is not necessarily sorted but it is a valid heap
    // the idea of buildHeap is that we start from the leaves and build the heaps from there
    // any element from arr.length / 2 to arr.length - 1 are leaves
    for(let i = Math.floor(arr.length / 2); i > -1; i--) {
        maxHeapify(arr, i, n);
    }
}


// Heapify
// Time Complexity: O(log (n))
// Space Complexity: O(1) 

// this is for a max heap but a min heap just changes the equality signs
function maxHeapify(arr, i, n) {
    // given any root i, the subtree where i is the root turns into a heap
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;
    let initMax = i;
    if(leftChild <= n && arr[initMax] < arr[leftChild]) {
        initMax = leftChild;
    }
    if(rightChild <= n && arr[initMax] < arr[rightChild]) {
        initMax = rightChild;
    }
    if(initMax != i) {
        swap(arr, i, initMax);
        // need to make sure the other subtrees are heaps as well
        maxHeapify(arr, initMax, n);
    }
}

function swap(arr, a, b) {
    let hold = arr[b];
    arr[a] = arr[b];
    arr[b] = hold;
}