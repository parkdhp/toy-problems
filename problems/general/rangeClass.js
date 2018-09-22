class Range {
  constructor(start, end, step) {
    this.start = start;
    if(end || end === 0) {
      this.end = end;
    } else {
      this.end = start;
    }
    if(step){
      this.step = step;
    } else{
      if(this.start <= this.end) {
        this.step = 1;
      } else {
        this.step = -1;
      }
    }
  }
  size() {
    return Math.floor((this.end - this.start) / this.step) + 1;
  }
  each(callback) {
    for (var i = this.start; this.step > 0 ? i <= this.end : i >= this.end; i+= this.step){
      callback(i);
    }
  }
  includes(val) {
    if (this.step > 0){
      return val >= this.start && val <= this.end && (((val - this.start)/this.step) % 1 === 0);
    } else {
      return val <= this.start && val >= this.end && (((val - this.start)/this.step) % 1 === 0);
    }
  }
}