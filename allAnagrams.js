/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  var anagrams = {};
  var generator = function(text, options){
    if(text.length === string.length) {
      anagrams[text] = true;
    }
    for(var i = 0; i < options.length; i++) {
      generator(text + options[i], options.slice(0, i) + options.slice(i + 1))
    }
  }
  generator('', string);
  return Object.keys(anagrams);
  // const output = [];
  // let letters = string.split('');
  // var i = 0;
  // function anagram(str, i){
  //   if(str.length === letters.length){
  //     output.push(str)
  //     return
  //   }
  //   letters.slice(0, i).forEach(letter => {
  //     if(!str.includes(letter)){
  //       anagram(str + letter)
  //     }
  //   });
  //   letters.slice(i).forEach(letter => {
  //     if(!str.includes(letter)){
  //       anagram(str+letter);
  //     }
  //   })
  // }
  // anagram('');
  // return output;
};

// console.log(allAnagrams('abc'))