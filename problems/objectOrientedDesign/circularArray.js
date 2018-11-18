/** Circular Array
 * Implement a circular array class that supports an array-like data structure which
 * can be efficiently rotated. If possible, the class should use a generic type (also
 * called a template), and should support iteration via the standard for (Obj o: 
 * circularArray) notation.
 */

class CircularArray {
  constructor() {
    this.array = [];
    this.front = null;
    this.back = null;
  }

  rotate() {
    if (this.array.length > 0) {
      this.front = (this.front + 1) % this.array.length;
      this.back = (this.back + 1) % this.array.length;
    }
  }

  push(val) {
    if (this.array.length === 0) {
      this.array.push(val);
      this.front = 0;
      this.back = 0;
    }
    if (this.front <= this.back) {
      this.array.push(val);
      this.back++;
    } else {
      this.array = this.array.slice(0, this.back + 1).concat([val]).concat(this.array.slice(this.front));
      this.back++;
    }
  }

  pop() {
    if(this.array.length === 0){
      throw new Error('The array is empty');
    }
    if(this.front <= this.back) {
      let output = this.array.pop();
      this.back--;
      return output;
    } else {
      let output = this.array[this.back];
      this.array = this.array.slice(0, this.back).concat(this.array.slice(this.front));
      this.back--;
      return output;
    }
  }
}

var ca = new CircularArray();
ca.push(1);
ca.push(2);
ca.push(3);
ca.push(4);
ca.push(5);
ca.rotate();
ca.rotate();
console.log(ca.array, ca.front, ca.back, '[1, 2, 3, 4, 5], 2, 1'); // [1, 2, 3, 4, 5], 2, 1
console.log(ca.pop(), 2); // 2
