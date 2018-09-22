/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/
// let rockPaperScissors = n => {
//   let rps = ['rock', 'paper', 'scissors']
//   let output = [];
//   let roundPoss = (round, roundNumber) => {
//     for (let i = 0; i < rps.length; i++) {
//       round.push(rps[i]);
//       if (roundNumber !== n) {
//         roundPoss(round, roundNumber + 1);
//       } else {
//         output.push(round.slice());
//       }
//       round.pop();
//     }
//   }
//   roundPoss([], 1);
//   return output;
// };

// const rockPaperScissors = n => {
//   if(n === 0) return []
//   const output = [];
//   function play(rounds) {
//     if(rounds.length === n) {
//       output.push(rounds)
//       return
//     }
//     ['r', 'p', 's'].forEach(round => {
//       play(rounds + round)
//     })
//   }
//   play('')
//   return output;
// }

const rockPaperScissors = roundCount => {
  if(roundCount === 0) return [];
  const permutations = [];
  function playRound(plays) {
    if(plays.length === roundCount) {
      permutations.push(plays);
      return
    }
    ['r', 'p', 's'].forEach(play => {
      return playRound(plays + play);
    })
  }
  playRound('');
  return permutations;
}

console.log(rockPaperScissors(3));