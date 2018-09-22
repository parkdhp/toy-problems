/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

let evenOccurrence = function(arr) {
  let obj = {}
  result = [];
  arr.forEach(element => {
    if(!obj[element]) {
      obj[element] = 1;
    } else {
      obj[element]++
    }
  });
  for(let key in obj) {
    if(obj[key] % 2 === 0){
      return key
    }
  }
  // return !result? null: result.join(', ');
  return null;
};