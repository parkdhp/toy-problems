const DFS = (tree, target) => {
  let result = null;
  function recurse(node, depth) {
    if (node.value === target)) {
      result = node;
    }
    if (node.left) {
      recurse(node.left, depth + 1);
    if (node.right) {
      recurse(node.right, depth + 1);
    }
  }
  recurse(tree, 0);
  return result;
};