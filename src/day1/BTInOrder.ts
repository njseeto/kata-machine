// In-order is when we go all the way left then push in the node then go right

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // base case is when a node does not exist
  if (!curr) {
    return path;
  }

  // recurse
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

  // post
  return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
