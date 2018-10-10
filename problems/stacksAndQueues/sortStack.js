/**Sort Stack
 * Write a program to sort a stack such that the smallest items are on the top.
 * You can use an additional temporary stack, but you may not copy the elements
 * into any other data structure (such as an array). The stack supports the 
 * following operations: push, pop, peek, and isEmpty.
 */

class Stack {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  push(val) {
    this.storage.push(val)
    this.size++
  }
  pop() {
    if(this.size > 0) {
      this.size--;
      return this.storage.splice(this.size, 1)[0];
    }
  }
  peek() {
    return this.storage[this.size - 1]
  }
  isEmpty() {
    return this.size === 0;
  }
}

//time complexity: O(n^2)
//space complexity: O(n)
const sortStack = (stack) => {
  let output = new Stack;
  while (!stack.isEmpty()) {
    let temp = stack.pop();
    while (!output.isEmpty() && output.peek() > temp) {
      stack.push(output.pop())
    }
    output.push(temp);
  }
  while (!output.isEmpty()) {
    stack.push(output.pop());
  }
  return output;
}