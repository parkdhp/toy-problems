/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/


const toObject = (storage) => {
  let obj = {};
  if(Array.isArray(storage)) {
    storage.forEach(val => {
      if (Array.isArray(val)) {
        toObject(val)
      }
      if (typeof val !==  null && typeof val === 'object') {
        toObject(val);
      }
      obj[val] = 1
    });
  }
  if(typeof storage !==  null && typeof storage === 'object') {
    for (const key in storage) {
      if(typeof obj[key] !== null && typeof obj[key] === 'object') {
        toObject(obj[key])
      }
      if(Array.isArray(obj[key])) {
        toObject(obj[key]);
      }
      obj[key] = storage[key];
    }
  }
  return obj;
}

Array.prototype.isSubsetOf = function(arr) {
  let obj =  toObject(arr);

  return this.reduce((a, c) => {
    if (!obj[c]) return false;
    return a;
  }, true);
}