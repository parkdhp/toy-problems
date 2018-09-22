/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(num) {
  var denom = 1;
  if (num < 0) {
    return '-' + toFraction(-num)
  } else {
    while (num % 1 !== 0) {
      num *= 10;
      denom *= 10;
    }
  }
  var gcd = 1;
  for (var i = num; i > 0; i--) {
    if (num%i === 0 && denom%i === 0) {
      gcd = i;
      break
    }
  }
  return num/gcd + '/' + denom/gcd
};