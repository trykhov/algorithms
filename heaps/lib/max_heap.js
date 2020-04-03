class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return 2 * idx;
    }

    getRightChild(idx) {
        return (2 * idx) + 1;
    }

    siftUp(idx) {
        if(idx === 1) return;
        let child = this.array[idx];
        let parentIdx = this.getParent(idx);
        let parent = this.array[parentIdx];
        if(parent < child) {
            // ES6 doesn't allow for [child, parent] = [parent, child]
            [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx], this.array[idx]];
            this.siftUp(parentIdx);
        }
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        if(idx === this.array.length - 1) return;
        let node = this.array[idx];
        let leftChildIdx = this.getLeftChild(idx);
        let rightChildIdx = this.getRightChild(idx);

        let leftChild = this.array[leftChildIdx] || -Infinity;
        let rightChild = this.array[rightChildIdx] || -Infinity;

        let largestChildIdx = leftChild < rightChild ? rightChildIdx : leftChildIdx;
        if(node < this.array[largestChildIdx]) {
            [this.array[idx], this.array[largestChildIdx]] = [this.array[largestChildIdx], this.array[idx]];
            this.siftDown(largestChildIdx);
        }
    }

    deleteMax() {
        if(this.array.length === 1) return null;
        let lastIdx = this.array.length - 1;
        let maxElement = this.array[1];
        // swap the top element with the last element
        [this.array[1], this.array[lastIdx]] = [this.array[lastIdx], this.array[1]];
        this.array.pop();
        this.siftDown(1);
        return maxElement;
    }
}

module.exports = {
    MaxHeap
};