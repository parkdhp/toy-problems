// TASK: Implement linear search

const linearSearch = (list, item) => {
  if (list.length === 0) {
    return null;
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return i;
    }
  }
  return null;
};

console.log(linearSearch([2, 6, 7, 90, 103], 90));
