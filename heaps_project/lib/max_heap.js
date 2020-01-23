class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return (idx * 2) + 1;
    }

    siftUp(idx) {
        if (idx === 1) return;

        let parentIdx = this.getParent(idx);

        if (this.array[idx] > this.array[parentIdx]) {
            [this.array[idx], this.array[parentIdx]] = [this.array[parentIdx],this.array[idx]];

            this.siftUp(parentIdx);
        }
    }

    insert(val) {
        this.array.push(val);

        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        let currentVal = this.array[idx];
        let leftChildIdx = this.getLeftChild(idx);
        let rightChildIdx = this.getRightChild(idx);
        let leftVal = this.array[leftChildIdx];
        let rightVal = this.array[rightChildIdx];

        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;

        if (currentVal > leftVal && currentVal > rightVal) return;

        let swapIdx;
        if (leftVal > rightVal) {
            swapIdx = leftChildIdx;
        } else {
            swapIdx = rightChildIdx;
        }

        [this.array[swapIdx], this.array[idx]] = [this.array[idx], this.array[swapIdx]];

        this.siftDown(swapIdx);
    }

    deleteMax(idx) {
        if (this.array.length === 2) return this.array.pop();
        if (this.array.length === 1) return null;

        let previousMax = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);

        return previousMax;
    }


}


// heap = [null, 100, 40, 27, 21, 8, 23, 19]



module.exports = {
    MaxHeap
};