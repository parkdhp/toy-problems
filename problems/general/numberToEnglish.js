/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

// Number.prototype.toEnglish = function () {
//   let n = this.toString(), s = n.length, e, ts = [],  result = [];
//   while (s > 0) {
//     e = s
//     ts.push(n.slice((s = Math.max(0, s - 3)), e))
//   }
//   for (let i = 0; i < ts.length; i++) {
//     let t = +ts[i]
//     console.log(t);
//     if (t) {
//       let singlets = ts[i].split('').reverse().map(n => +n);
//       if (singlets[1] === 1) {
//         singlets[0] += 10
//       }

//     }
    
//   }
  
//   return result.reverse().join(' ');
// };

Number.prototype.toEnglish = function () {
  if(numbersToPlace[this]) {
    return numbersToPlace[this]
  }
  if(numbersToWords[this]) {
    return numbersToWords[this]
  }
  if(this < 100) {
    let numberFloorOf10 = Math.floor(this/10) * 10;
    let leftOver = this%10;
    return numbersToWords[numberFloorOf10] + '-' + numbersToWords[leftOver]
  }
  if (this < 1000) {
    var place = 100;
  } else {
    var place = 1000;
  }
  while(this/place > 1000) {
    place *= 1000;
  }
  let numberFloorOfPlace = Math.floor(this/place);
  let leftOver = this % place;
  return numberFloorOfPlace.toEnglish() + ' ' + numbersToPlace[place] + (leftOver > 0 ? ' ' + leftOver.toEnglish() : '');
}