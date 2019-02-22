// We want to build a system that takes in search queries and outputs the most popular one, together with the number of times it appears.
// Example:
//   input: ["py", "js", "py", "js", "go", "js"]
// output: {
//   query: 'js',
//   count: 3
// }

const popQuery = arr => {
  const storage = {};
  let maxCount = 0;
  let popularQuery;
  arr.forEach(input => {
    Storage[input] = 1 || storage[input] + 1;
  });
  for (const item in storage) {
    if (storage[item] > maxCount) {
      popularQuery = item;
      maxCount = storage[item];
    }
  }
  return {
    query: popularQuery,
    count: maxCount,
  };
};

// We now want to output the m queries that show up the most often, together with the number of times they appear.
// Example:
//   input: ["py", "js", "py", "js", "go", "js"]
// output: [{
//   query: 'js',
//   count: 3
// }, {
//   query: 'py',
//   count: 2
// }, {
//   query: 'go',
//   count: 1
// }]
// O(nlogm)

// Assume you have access to a heap class
// heap {
//   // max heap returns biggest element and removes it from the heap
//   constructor(comparator) {}
//    // returns node with most count
//    poll()
//    // shows the largest count element without removing
//    peek()
//    // inserts query or increments count of query. Check query and increment or initialize depending on contents of the tree.
//    push({query: '', count: n})
// }

const top10Query = (arr, m) => {
  const heap = new Heap();
  const result = [];
  arr.forEach(input => {
    heap.push(input);
  });
  for (const item in storage) {
    if (heap.peek().count < storage[item]) {
      heap.push({
        item: storage[item],
      });
    }
  }
  for (let i = 0; i < m; i++) {
    const q = heap.poll();
    result.push({ query: q.query, count: q.count });
  }
  return result;
};

/** Top K Frequent Elements
 * Given a non-empty array of integers, return the k most frequent elements.
 *
 * EXAMPLE
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 * You may assume k is always valid, 1 <= k <= number of unique elements
 * Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

// Time complexity: O(n log k)
// Space complexity: O(n)
const topKFrequent = (arr, k) => {
  const obj = {};
  arr.forEach(item => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item]++;
    }
  });

  const array = [];
  for (const key in obj) {
    array.push({ key, value: obj[key] });
  }
  array.sort((a, b) => b.value - a.value);

  const output = [];
  for (let i = 0; i < k; i++) {
    output.push(`{Query: ${array[i].key}, Count: ${array[i].value}}`);
  }
  return output;
};

console.log(
  topKFrequent(['js', 'js', 'py', 'py', 'py', 'go', 'go', 'go', 'go', 'go'], 2)
);
