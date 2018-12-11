// We want to build a system that takes in search queries and outputs the most popular one, together with the number of times it appears.
// Example:
//   input: ["py", "js", "py", "js", "go", "js"]
// output: {
//   query: 'js',
//   count: 3
// }

const popQuery = (arr) => {
  let storage = {};
  let maxCount = 0;
  let popQuery;
  arr.forEach((input) => {
    Storage[input] = 1 || storage[input] + 1;
  })
  for (const item in storage) {
    if (storage[item] > maxCount) {
      popQuery = item;
      maxCount = storage[item];
    }
  }
  return {
    'query': popQuery,
    'count': maxCount
  }
}


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

heap {
  constructor(comparator) {}
  // Return biggest one and remove it from heap 
  poll()
  // Return biggest one.
  peek()
  push(result)
}

Const top10Query = (arr) => {
  let storage = {};
  let heap = new heap(min);
  let result = [];
  let popQuery;
  arr.forEach((input) => {
    storage[input] = 1 || storage[input] + 1;
  })
  for (const item in storage) {
    if (heap.peek().count < storage[item]) {
      heap.push({
        item: storage[item]
      })
    }
  }
  for (let i = 0; i < 10; i++) {
    result.push(heap.poll());
  }
  return result;
}

// Time complexity: O(n log k)
// Space complexity: O(n)
const topKFrequent = (arr, k) => {
  const obj = {};
  arr.forEach((item) => {
    if(!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item]++;
    }
  })
  
  const array = [];
  for(const key in obj) {
    array.push({key: key, value: obj[key]});
  }
  arr.sort((a, b) => {
    return b.value - a.value;
  })

  const output = [];
  for(let i = 0; i < k; i++) {
    output.push(`{Query: ${arr[i].key}, Count: ${arr[i].value}}`);
  }
  return output;
}