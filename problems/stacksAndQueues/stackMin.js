/**Stack Min
 * How would you design a stack which, in addition to push and pop, 
 * has a function mind which returns the minimum element? Push, pop,
 * and min should all operate in O(1) time.
 */

class Stack {
  constructor() {
    this.storage= []
    this.size = 0
  }
  push(val) {
    this.storage.push(val);
    this.size++;
  }
  pop() {
    this.size--;
    return this.storage.splice(this.storage.length - 1, 1);
  }
  isEmpty() {
    return this.size === 0;
  }
  peek() {
    return this.storage[this.size - 1];
  }
}

class MinStack {
  constructor() {
    this.stack = new Stack();
    this.minStack = new Stack();
  }
  push(val) {
    if (this.minStack.isEmpty() || val <= this.minStack.peek()) {
      this.minStack.push(val)
    }
    this.stack.push(val);
  }
  pop() {
    if (this.stack.isEmpty()) {
      throw new Error('Popping from empty stack')
    }
    let val = this.stack.pop();
    if (val === this.minStack.peek()) {
      this.minStack.pop();
    }
    return val;
  }
  size() {
    return this.stack.size();
  }
  isEmpty() {
    return this.stack.isEmpty();
  }
  peek() {
    return this.stack.peek();
  }
  min() {
    if(this.stack.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.minStack.peek();
  }
}