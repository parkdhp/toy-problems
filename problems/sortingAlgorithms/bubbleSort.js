/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.

let bubbleSort = function(array) {
  if(array){
    for (var i = 0; i < array.length -1; i++){
      let hasSwapped = false;
      array.forEach((el, i, arr) => {
        if(arr[i+1] && el > arr[i + 1]) {
          swap(array, i, i + 1)
          hasSwapped = true;
        }
      });
      if(!hasSwapped) return array
    }
  }
  return array;
};

let swap = function(arr, index1, index2) {
  let temp = arr[index1];
  let temp2 = arr[index2];
  arr[index2] = temp;
  arr[index1] = temp2;
}

//time complexity = O(n^2)