type Node<T> = {
  value: T,
  next?: Node<T>
}

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = {value: item} as Node<T>;
    if (!this.tail) {
      // create a node
      this.head = this.tail = node;
      return;
    }
    this.length++;

    this.tail.next = node;
    this.tail = node;
  }
  deque(): T | undefined {
    if (!this.head) { 
      return undefined;
    }

    const head = this.head;
    this.head = this.head.next;
    head.next = undefined;

    if (this.length === 0) {
      this.tail = undefined;
    }
    this.length--;
    return head.value;
  }
    peek(): T | undefined {
      return this.head?.value // ? is a safe navigation operator
  }
}