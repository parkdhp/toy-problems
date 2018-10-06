class Stack {
  constructor() {
    this.storage = [];
    this.counter = 0;
    }
    push(val) {
      this.storage.push(val);
      this.counter++;
    }
    pop() {
    this.counter--;
    return this.storage.splice(-1);
  }
  size() {
    return this.counter;
  }
  min() {
    return this.storage.reduce((smallest, val) => {
      if (val < smallest) {
        smallest = val;
      }
      return smallest;
    });
  }
}