/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

let makeChange = function(total) {
  //create total count
  let count = 0;
  //create array of coin values
  var coins = [1, 2, 5 , 10, 20, 50, 100, 200];
  //create a recursive function
  function coinPermutator(sum, idx) {
    //base case, if sum is equal total
    if(sum === total){
      //add 1 to count
    	count++;
    }
    //while the sum is less than total continue to do something
    if(sum < total){
      // iterate through coins, recursion will handle possible permutations
      for(var i = idx; i < coins.length; i++) {
        //if coin from array idx is less than total value
          if(sum + coins[i] <= total)
          //pass it off its not my problem anymore
    	    coinPermutator(sum + coins[i], i);
      }
    }
  }
  //call recursion
  coinPermutator(0, 0);
  //return total permutations of coins
  return count;
};
