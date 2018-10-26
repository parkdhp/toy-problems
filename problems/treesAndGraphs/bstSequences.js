/**BST Sequences
 * A binary search tree was created by traversing through an array from left to right and inserting
 * each element. Given a binary search tree with distinct elements, print all possible arrays that
 * could have led to this tree.
 * 
 * EXAMPLE
 * Input:      2
 *           /   \
 *          1     3
 * Output: [2, 1, 3], [2, 3, 1]
 */

 const bstSequences = (tree) => {
  let sequences = [],
    startTravelled = {};
  const recurse = (nodes, travelled) => {
    let noChild = true;
    nodes.forEach((node) => {
      if (node.left !== null && travelled[node.left.value] === undefined) {
        noChild = false;
        travelled[node.left.value] = true;
        recurse([...nodes, node.left], travelled);
        delete travelled[node.left.value];
      }
      if (node.right !== null && travelled[node.right.value] === undefined) {
        noChild = false;
        travelled[node.right.value] = true;
        recurse([...nodes, node.right], travelled);
        delete travelled[node.right.value];
      }
    })
    if (noChild) {
      sequences.push(nodes.map(node => node.value));
    }
  }
  startTravelled[tree.value] = true;
  recurse([tree], startTravelled);
  return sequences;
}