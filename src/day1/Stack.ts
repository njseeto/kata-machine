type Node<T> = {
  value: T,
  previous?: Node<T>
}
export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(item: T): void {
    const node = {value: item} as Node<T>
    if (!this.head) {
      this.head = node
      return;
    }
    node.previous = this.head;
    this.head = node;
    this.length ++;
  }

  pop(): T | undefined {
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }

    const head = this.head as Node<T>;
    this.head = head.previous;
    this.length--;

    head.previous = undefined;
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value
  }
}