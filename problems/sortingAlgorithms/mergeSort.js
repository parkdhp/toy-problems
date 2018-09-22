/**
 * Implement a function that sorts an array of numbers using the "mergesort" algorithm.
 *
 * Mergesort is an optimized sorting algorithm which is a common choice to implement `sort`
 * methods in standard libraries as an alternative to quicksort or heapsort. (For example,
 * Firefox's Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
 * Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)
 *
 * Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N
 * as a set of N "sublists" of length 1, which are considered to be sorted. Adjacent sublists are then
 * "merged" into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so
 * on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
 * after the first merge, and so on.)
 *
 * This can be implemented using either a recursive ("top-down") or an iterative ("bottom-up") approach.
 *
 * Illustration of an iterative approach:
 *
 *   Initial step: Input array is split into "sorted" sublists
 *   [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]
 *
 *   Merge step: Adjacent sublists are merged into sorted sublists
 *   [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]
 *
 *   Repeat merge step:
 *   [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]
 *
 *   Repeat merge step:
 *   [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]
 *
 *   Done! Return the sorted array:
 *   [1,2,3,4,4,7,9]
 * Illustration of a recursive approach:
 *
 *   1. Split the input array in half
 *   [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2
 *
 *   2. Both sides are sorted recursively:
 *   [4, 7, 4] -> [4, 4, 7]
 *   [3, 9, 1, 2] -> [1, 2, 3, 9]
 *
 *   3. Both halves are merged:
 *   [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]
 *
 *   Step 2 might seem a bit mystical - how do we sort both sides? The
 *   simple answer is that we use mergesort! After all, mergesort sorts
 *   arrays, right? We can test this on [4, 7, 4] by just following the
 *   steps above but imagining that [4, 7, 4] is the whole array, which
 *   is what happens when you call mergesort on it.
 *
 *   1. Split the input array in half
 *   [4, 7, 4] -> [4], [7, 4]
 *
 *   2. Both sides are sorted recursively:
 *   [4] -> [4]
 *   [7, 4] -> [4, 7]
 *
 *   3. Both halves are merged:
 *   [4], [4, 7] -> [4, 4, 7]
 *
 *   I cheated again by going directly from [7, 4] to [4, 7], but that's
 *   really just:
 *
 *   1. Split the input array in half
 *   [7, 4] -> [7], [4]
 *
 *   2. Both sides are sorted recursively:
 *   [7] -> [7]
 *   [4] -> [4]
 *
 *   3. Both halves are merged:
 *   [7], [4] -> [4, 7]
 *
 *   As you can see, all the work actually gets done in step 3, the merge
 *   step. Everything else is just splitting and recursing.
 *
 *
 * Complexity:
 *   What is the complexity of your algorithm in time and space?
 *   The merge step can be implemented using what is conceptually an insertion sort, and yet its time
 *   complexity is (spoiler alert!) much lower. Why is that?
 *
 *
 * Extra credit:
 *   One of the benefits of mergesort over e.g. quicksort is that it is "stable"; assuming the merge
 *   step is properly implemented, list items with the same value will remain in the same order they were
 *   in in the input. (This is academic in the case of sorting integers, but it is an important consideration
 *   when sorting more complex objects.) Is your implementation a stable sort?
 *
 * Extra credit:
 *   The naive mergesort assumes that the input array is completely unsorted, but in practice even random
 *   data will have "runs" of sorted integers. The "natural mergesort" takes advantage of this by splitting
 *   the input not into sublists of length 1, but into whatever sublists are already sorted in the input.
 *   Implement natural splitting into your mergesort. How much does it improve your average-case runtime?
 *
 */




function isSorted(array) {
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index2] = arr[index1];
  arr[index1] = temp;
}

function mergeArr(arr1, arr2) {
  return [...arr1, ...arr2]
}

function sort(left, right){
  let output = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while(leftIdx < left.length && rightIdx < right.length) {
    if(left[leftIdx] < right[rightIdx]) {
      output.push(left[leftIdx]);
      leftIdx++;
    }
    else {
      output.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return [...output, ...left.slice(leftIdx), ...right.slice(rightIdx)];
}


var mergeSort = function (array) {
  if (array.length <= 1) { return array; }
  var half = Math.floor(array.length/2);
  var left = array.slice(0, half);
  var right = array.slice(half);
  return merge(mergeSort(left), mergeSort(right));
}

var merge = function (left, right) {
  var i = 0, j = 0, result = [];
  while( i < left.length && j < right.length) {
    if(left[i] <= right[j]){
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }
  var remaining = i === left.legnth ? right.slice(j) : left.slice(i);
  return result.concat(remaining);
}
// console.log(mergeSort([5,4,2,3,6,1]));
// let mergeSort = function (array) {
//   let output = [];
  
  // let recurse = function(array) {
  //   if (array.length === 1){
  //     return array;
  //   }
  //   //[5,3,4,2,1]
  //   let mid = Math.floor(array.length /2)
  //   let left =  array.slice(0, mid); //[5,3]
  //   let right = array.slice(mid); //[4,2,1]
  //   let leftIdx = 0;
  //   let rightIdx = 0;
  //   while(leftIdx < left.length || rightIdx < right.length){

  //   }
  //   recurse(left);
  //   recurse(right);

  //   mergeArr(left , right);
  // }
  
  // for (var i = 0; i < splitArr.length - 1; i += 2) {
  //   let subArr = 
  //   let
  //   if(splitArr.length % 2 === 1){
      
  //   }
  //   subArr.forEach((el, i, a) => {
  //     if (el > a[i + 1]) {
  //       swap(a, i + 1, i)
  //     }
  //   })
  //   output.push(...subArr);
  // }
  // mergeSort(output);
  //spread arr
  // return output;
// };

// console.log(mergeSort([5,2,3,1,6]))
// let x = Math.floor(5);
// x;