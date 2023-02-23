// Post-order we go left then right, then we visit the node

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // base case is when a node does not exist
  if (!curr) {
    return path;
  }

  // recurse
  walk(curr.left, path);
  walk(curr.right, path);

  // post
  path.push(curr.value);
  return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
