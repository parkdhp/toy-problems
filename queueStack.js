/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
class Stack { 
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  push(value) {
    this.storage[this.size] = value;
    this.size++;
  }
  pop() {
    let temp = this.storage[this.size];
    this.storage = this.storage.slice(this.size-1);
    this.size--;
    return temp;
  }
  size() {
    return this.size;
  }
}

/**
  * Queue Class
  */
class Queue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }
  enqueue(value) {
    this.inbox.push(value);
  }
  dequeue() {
    if(this.outbox.size()) {
      return this.outbox.pop();
    }
    while(this.inbox.size()) {
      this.outbox.push(this.inbox.pop());
    }
    return this.outbox.pop();
  }
  size() {
    return this.inbox.size + this.outbox.size();
  }
}