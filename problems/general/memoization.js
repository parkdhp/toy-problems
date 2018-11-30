// TASK 1: Write a function, times10, that takes an argument, n, and multiplies n times 10
// a simple multiplication function

const times10 = n => n * 10;

// TASK 2: Use an object to cache the results of your times10 function.
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};

const memoTimes10 = n => {
  if (n in cache) {
    console.log('Fetching from cache:', n);
    return cache[n];
  }
  console.log('Calculation result');
  const result = times10(n);
  cache[n] = result;
  return result;
};

try {
  console.log('Task 2 calculated value:', memoTimes10(9)); // calculated
  console.log('Task 2 cached value:', memoTimes10(9)); // cached
} catch (e) {
  console.error('Task 3:', e);
}

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosureTimes10 = () => {
  const cache = {};
  return n => {
    if (n in cache) {
      console.log('Fetching from cache:', n);
      return cache[n];
    }
    console.log('Calculating result');
    const result = n * 10;
    cache[n] = result;
    return result;
  };
};

const memoClosureTimes10 = memoizedClosureTimes10();
try {
  console.log('Task 3 calculated value:', memoClosureTimes10(9)); // calculated
  console.log('Task 3 cached value:', memoClosureTimes10(9)); // cached
} catch (e) {
  console.error('Task 3:', e);
}

// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.
const memoize = cb => {
  const cache = {};
  return (...args) => {
    if (args[0] in cache) {
      console.log('Fetching form cache:', args[0]);
      return cache[args[0]];
    }
    console.log('Calculating result');
    const result = cb(...args);
    cache[args[0]] = result;
    return result;
  };
};

// returned function from memoizedAdd
const memoizedTimes10 = memoize(times10);
try {
  console.log('Task 4 calculated value:', memoizedTimes10(9)); // calculated
  console.log('Task 4 cached value:', memoizedTimes10(9)); // cached
} catch (e) {
  console.error('Task 4:', e);
}
