/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

const primeTester = (n) => {
  if (typeof n !== 'number' || n <= 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if(n % i === 0)
    return false;
  }
  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

const primeSieve = (start, end) => {
  let current = 2, primes = range(0, end);
  while (current < Math.sqrt(end)) {
    for (let i = current * 2; i <= end; i += current) {
      primes[i] = null;
    }
    current += 1;
    while (!primes[current] && current <= end) {
      current += 1;
    }
  }
  return primes.slice(2).filter(val => val && val>= start);
};

const range = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}