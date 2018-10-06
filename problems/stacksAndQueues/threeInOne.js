/**Three In One
 * Describe how you could use a single array to implement three stacks
 */

//We can create a class that represents an array of arrays as different stacks

class MultiStacks {
  constructor() {
    this.stacks = []
  }
  push(val, stackNum) {
    this.stacks[stackNum] = this.stacks[stackNum] || [];
    this.stacks[stackNum].push(val);
  }
  pop(stackNum) {
    return this.stacks[stackNum].splice(-1);
  }
  size(stackNum) {
    return this.stacks[stackNum].length;
  }
}