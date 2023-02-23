// compare two binary trees to check if they are equal in value and structure

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  // base cases
  // if both are null - structurally they are the same
  if (a === null && b === null) {
    return true;
  }

  // if either is null - this means the trees have a different structure
  if (a === null || b === null) {
    return false;
  }

  // if the node values are not the same
  if (a.value !== b.value) {
    return false;
  }

  // recurse over the whole tree and the terminating nodes should be equal
  return compare(a.left, b.left) && compare(a.right, b.right);
}