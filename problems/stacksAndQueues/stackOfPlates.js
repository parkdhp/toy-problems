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
    this.storage = []
    this.size = 0
  }
  push(val) {
    this.size++;
    this.storage.push(val)
  }
  pop() {
    this.size--;
    return this.storage.splice(this.storage.length - 1, 0);
  }
  size() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0
  }
  peek() {
    return this.storage[this.size - 1];
  }
}

class MultipleStacks extends Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = [];
  }
}