// This is the opposite to DFS and so should use a Queue
// We don't need recursion, instead we take an iterative approach

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q: (BinaryNode<number> | null)[]  = [head];

  while (q.length) {

    // the types tell us what the type of the shifted value could be
    const next = q.shift() as BinaryNode<number> | undefined | null;

    if (!next) {
      continue;
    }

    // search
    if (next.value === needle) {
      return true;
    }

    q.push(next.left);
    q.push(next.right);
  }

  return false;
}