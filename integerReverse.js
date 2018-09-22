/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  var reversed = 0;
  while(number != 0) {
    reversed *= 10;
    reversed += number % 10;
    number = Math.floor(number / 10);
  }
  return reversed;
}