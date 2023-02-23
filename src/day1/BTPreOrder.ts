// Pre-order is when we push the node then move left and repeat this
// until we reach the base case then move right

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // base case is when a node does not exist
  if (!curr) {
    return path;
  }

  // recurse
  // pre
  path.push(curr.value);

  // recurse
  walk(curr.left, path);
  walk(curr.right, path);

  // post
  return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
