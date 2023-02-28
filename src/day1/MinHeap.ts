export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    if(this.length === 0) {
      return -1;
    }

    const out = this.data[0];
    // reduce the length first, since heapifyDown() uses the length
    this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.heapifyDown(0);

    return out
  }

  private heapifyDown(index: number): void {
    const leftIndex = this.leftChild(index);
    const rightIndex = this.rightChild(index);

    if (index >= this.length || leftIndex >= this.length) {
      return;
    }

    const leftValue = this.data[leftIndex];
    const rightValue = this.data[rightIndex];
    const value = this.data[index];

    // if our rightValue is the smallest and our value is greater than the smallest
    if (leftValue > rightValue && value > rightValue) {
      this.data[index] = rightValue;
      this.data[rightIndex] = value;
      this.heapifyDown(rightIndex);
    } else if (rightValue > leftValue && value > leftValue) {
      this.data[index] = leftValue;
      this.data[leftIndex] = value;
      this.heapifyDown(leftIndex);
    }
  }

  private heapifyUp(index: number): void {
    if ( index === 0){
      return;
    }

    const p = this.parent(index);
    const parentV = this.data[p];
    const v = this.data[index];

    if (parentV > v) {
      this.data[index] = parentV;
      this.data[p] = v;
      this.heapifyUp(p);
    }

  }

  private parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number): number {
    return (2 * index) + 1;
  }

  private rightChild(index: number): number {
    return (2 * index) + 2;
  }
}

/* --- Heap ---
A heap is a good data structure to implement a pirority queue.

Put simply, a heap is a binary tree where every child and grand child is
smaller (MaxHeap) or larger (MinHeap) than the current node.

A heap is self-balancing, ie: it always maintains a perfect binary tree.
This is because we are always adding or removing where the length is
and then bubbling to the correct position.

- Whenever a node is added, we must adjust the tree
- Whenever a node is removed, we must adjust the tree
- There is no traversing the tree
- A heap is usually a full/complete tree (ie: it never has any empty spaces)

HeapifyUp (in MinHeap)
Start from the bottom and check if the node is smaller than the parent.

HeapifyDown (in MinHeap)
Take the last child, move it to the head. Check the two children, then swap the
node with the smallest child and continue until the tree is true.

Finding the node
We use an array list to find the node, ie: the head is always at the zero index.
Array list as we need to be able to grow it.

Finding the children of a node
Left node will be: 2 * index + 1
Right node will be: 2 * index + 2

Finding the parent of a node
(index + 1) / 2

Finding the bottom
This is the value at the last index, ie: length.

Running time
The running time is the height of the tree and since the tree is balanced,
it is O(log n).

*/
