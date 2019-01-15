/** Sorted Merge
 * You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B.
 * Write a method to merge B into A in sorted order.
 */

const sortedMerge = (a, b) => {
  if (a === undefined || b === undefined) {
    throw new Error('Minimum of two arrays required');
  }
  const output = [];
  let pointerA = 0;
  let pointerB = 0;

  while (pointerA < a.length || pointerB < b.length) {
    if (pointerA === a.length) {
      output.push(b[pointerB]);
      pointerB++;
    } else if (pointerB === b.length) {
      output.push(a[pointerA]);
      pointerA++;
    } else if (a[pointerA] < b[pointerB]) {
      output.push(a[pointerA]);
      pointerA++;
    } else {
      output.push(b[pointerB]);
      pointerB++;
    }
  }
  return output;
};

// in place solution: merge into A in place
const moveBack = (arr, pt, end) => {
  let currPt = end;
  while (currPt > pt) {
    arr[currPt] = arr[currPt - 1];
    currPt--;
  }
};

const sortedMerge2 = (a, b) => {
  if (a === undefined || b === undefined) {
    throw new Error('Minimum of two arrays required');
  }
  const output = [];
  let pointerA = 0;
  let pointerB = 0;
  let end = a.length;
  while (pointerB < b.length) {
    // if pointerA is done traversing (should append all of B to back of A)
    if (pointerA === end) {
      a[pointerA] = b[pointerB];
      pointerA++;
      pointerB++;
      end++;
    } else if (a[pointerA] < b[pointerB]) {
      pointerA++;
    } else {
      moveBack(a, pointerA, end);
      a[pointerA] = b[pointerB];
      pointerA++;
      pointerB++;
      end++;
    }
  }
  return a;
};

// Test
// sortedMerge merges in order
console.log(
  JSON.stringify(sortedMerge([0, 2, 4], [1, 3, 5])) ===
    JSON.stringify([0, 1, 2, 3, 4, 5])
);
console.log(
  JSON.stringify(sortedMerge2([0, 2, 4], [1, 3, 5])) ===
    JSON.stringify([0, 1, 2, 3, 4, 5])
);
// sortedMerge merges sorted arrays
console.log(
  JSON.stringify(sortedMerge([0, 1, 2], [3, 4, 5])) ===
    JSON.stringify([0, 1, 2, 3, 4, 5])
);
console.log(
  JSON.stringify(sortedMerge2([0, 1, 2], [3, 4, 5])) ===
    JSON.stringify([0, 1, 2, 3, 4, 5])
);
// sortedMerge merges empty arrays
console.log(
  JSON.stringify(sortedMerge([0, 1, 2], [])) === JSON.stringify([0, 1, 2])
);
console.log(
  JSON.stringify(sortedMerge2([0, 1, 2], [])) === JSON.stringify([0, 1, 2])
);
