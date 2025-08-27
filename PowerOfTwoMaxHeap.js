class PowerOfTwoMaxHeap {
    constructor(power) {
        if (power < 0) {
            throw new Error("Power must be non-negative.");
        }
        this.power = power;
        this.heap = [];
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / Math.pow(2, this.power));
    }

    getFirstChildIndex(parentIndex) {
        return parentIndex * Math.pow(2, this.power) + 1;
    }

    siftUp(index) {
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[index] > this.heap[parentIndex]) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    siftDown(index) {
        const size = this.heap.length;
        let firstChildIndex;

        while ((firstChildIndex = this.getFirstChildIndex(index)) < size) {
            let maxChildIndex = firstChildIndex;
            const numChildren = Math.min(Math.pow(2, this.power), size - firstChildIndex);

            for (let i = 1; i < numChildren; i++) {
                const currentChildIndex = firstChildIndex + i;
                if (this.heap[currentChildIndex] > this.heap[maxChildIndex]) {
                    maxChildIndex = currentChildIndex;
                }
            }

            if (this.heap[index] < this.heap[maxChildIndex]) {
                [this.heap[index], this.heap[maxChildIndex]] = [this.heap[maxChildIndex], this.heap[index]];
                index = maxChildIndex;
            } else {
                break;
            }
        }
    }

    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
    }

    popMax() {
        if (this.heap.length === 0) {
            throw new Error("Heap is empty.");
        }

        const maxValue = this.heap[0];
        const lastValue = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastValue;
            this.siftDown(0);
        }

        return maxValue;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}
