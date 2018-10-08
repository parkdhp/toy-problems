/**Stack of Plates
 * Imagine a (literal) stack of plates. If the stack gets too high,
 * it might topple. Therefore, in real life, we would likely start a
 * new stack when the previous stack exceeds some threshold. Implement
 * a datastructure SetOfStacks that mimics this. SetOfStacks should be
 * composed of several stacks and should create a new stack once the
 * previous once exceeds capacity. (that is, pop(), should return the
 * same values as it would if there were just a single stack).
 * 
 * FOLLOW UP
 * Implement a function popAt(index) which performs a pop operation
 * on a specific substack.
 */

class Stack {
  constructor() {
    this.stack = []
    this.size = 0
  }
  push(val) {
    this.size++;
    this.stack.push(val)
  }
  pop() {
    if(this.stack.length === 0) {
      throw new Error('Popping from empty stack');
    }
    if (this.stack.length > 0) {
      this.size--;
      return this.stack.splice(this.stack.length - 1, 1)[0];
    }
  }
  size() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0
  }
  peek() {
    return this.stack[this.size - 1];
  }
}

class SetOfStacks extends Stack {
  constructor(capacity) {
    super();
    this.capacity = capacity;
    this.stacks = [new Stack];
  }
  push(val) {
    if (this.stacks[this.stacks.length - 1].size === this.capacity) {
      this.stacks.push(new Stack)
    }
    this.stacks[this.stacks.length - 1].push(val);
    this.size++;
  }
  pop() {
    if (this.stacks.length > 1 && this.stacks[this.stacks.length - 1].size === 0) {
      this.stacks.splice(this.stacks.length - 1, 1);
    };
    return this.stacks[this.stacks.length - 1].pop();
  }
}