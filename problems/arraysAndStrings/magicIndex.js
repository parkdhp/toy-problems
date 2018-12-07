/** Magic Index
 * A magic index in an array A[0...n-1] is defined to be an index such that A[i] = i.
 * Given a sorted array of distinct integers, write a method to find a magic index, 
 * if one exists, in array A.
 */


const magicIndex = (arr, start, end) => {
  start = start || 0;
  end = end || arr.length - 1;
  let mid = Math.floor(start + (end - start)/2);
  if(mid === start && arr[mid] !== mid) {
    console.log('start:', start, 'mid:', mid, 'end:', end);
    console.log(arr[mid]);
    return null
  } else if(arr[mid] === mid) {
    console.log('start:', start, 'mid:', mid, 'end:', end);
    console.log(mid);
    return mid;
  } else if(mid < arr[mid]) {
    console.log('2nd', 'start:', start, 'mid:', mid, 'end:', end);
    return magicIndex(arr, start, mid);
  } else {
    console.log('last','start:', start, 'mid:', mid, 'end:', end);
    return magicIndex(arr, mid, end);
  }
}


console.log(magicIndex([-5, -2, -1, 0, 1, 1, 1, 2, 3, 4, 5, 6, 8, 10, 14, 20, 22, 23, 24, 25]),14);
console.log(magicIndex([1, 5, 6, 10]), null);
console.log(magicIndex([-6, -3, 0, 2, 4]), 4);