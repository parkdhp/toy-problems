const computeFactorialIteratively = n => {
  let result = 1;
  for (let i = 2; i < n; i++) {
    console.log(`result = ${result} * ${i} (${result * i})`);
    result *= i;
  }
  return result;
};

const computeFactorialRecursively = n => {
  if (n === 1) {
    return 1;
  }
  return n * computeFactorialRecursively(n - 1);
};

console.log(computeFactorialRecursively(2));

const joinElementsRecursively = (array, joinString) => {
  const recurse = (index, resultSoFar) => {
    resultSoFar += array[index];
    if (index === array.length - 1) {
      return resultSoFar;
    }
    return recurse(index + 1, resultSoFar + joinString);
  };
  return recurse(0, '');
};

const joinElementsIteratively = (array, joinString) => {
  let resultSoFar = '';
  for (let i = 0; i < array.length - 1; i++) {
    resultSoFar += array[i] + joinString;
  }
  return resultSoFar + array[array.length - 1];
};

console.log(joinElementsIteratively(['s', 'cr', 't cod', ' :) :)'], 'e'));

const memoizeFactorial = cb => {
  const cache = {};
  return (...args) => {
    const n = args[0];
    if (n in cache) {
      console.log('Fetching from cache', n);
      return cache[n];
    }
    const result = cb(n);
    cache[n] = result;
    return result;
  };
};

const factorial = memoizeFactorial(n => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
});

console.log(factorial(5));
console.log(factorial(5));
