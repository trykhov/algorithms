// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    // heaps are complete and each subtree is a heap
    for(let i = array.length - 1; i > 1; i--) {
        // start from the bottom and move up
        // assume the end of the array is the left most
        // if there's a null before 0, while the end is not null, then it breaks the leftmost property
        // if the parent is less than the child => breaks heap property
        if(array[i] === null || (array[Math.floor(i/2)] < array[i])) return false;
    }
    return true;
}






module.exports = {
    isMaxHeap
};