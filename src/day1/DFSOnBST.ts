function search(node: BinaryNode<number> | null, needle: number): boolean {
  // base case 1 - null case
  if (node === null) {
    return false;
  }

  // base case 2 - when the needle has been found
  if (node.value === needle) {
    return true;
  }

  // otherwise we recurse
  if (node.value < needle){
    return search(node.right, needle);
  } else {
    return search(node.left, needle);
  }
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}
