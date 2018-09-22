const BFS = (tree, target) => {
  let queue = [tree], current;
  while(queue.length !== 0) {
    if(current.value === target) {
      return current;
    }
    current = queue.shift();
    if(current.left) {
      queue.push(current.left);
    }
    if(current.right) {
      queue.push(current.right);
    }
  }
}
