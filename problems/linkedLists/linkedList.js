class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    if (this.tail === null) {
      this.tail = new Node(val);
      this.head = this.tail;
    } else {
      const temp = this.tail;
      this.tail = new Node(val);
      temp.next = this.tail;
      delete this.temp;
    }
  }

  removeHead() {
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      return this;
    }
    if (this.head !== null) {
      const temp = this.head;
      delete this.head;
      this.head = temp.next;
      return temp.val;
    }
  }

  removeTail() {
    let current = this.head;
    if (!current) return null;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return null;
    }
    while (current.next) {
      if (current.next.next === null) {
        const removedNode = current.next;
        this.tail = current;
        this.tail.next = null;
        return removedNode;
      }
      current = current.next;
    }
  }

  contains (target) {
    let temp = this.head;
    while (temp !== null) {
      if (temp.val === target) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports = LinkedList;
