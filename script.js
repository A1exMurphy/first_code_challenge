// 1. Start with the number 29 and set that equal to a variable named highScore;
let highScore = 29
console.log(highScore);

// 2. Make a new empty array called myScrabbleTiles.
let myScrabbleTiles = []
console.log(myScrabbleTiles);

// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/
let tile14 = {letter: "N", score: 1};
let tile11 = {letter: "K", score: 5};
let tile26 = {letter: "Z", score: 10};
let tile24 = {letter: "X", score: 8};
let tile4 = {letter: "D", score: 2};
let tile1 = {letter: "A", score: 1};

myScrabbleTiles.push("draw six tiles:", tile14, tile11, tile26, tile24, tile4, tile1);
console.log(myScrabbleTiles);

// 4. Remove the last tile from myScrabbleTiles and save it in a variable named removedTile.
myScrabbleTiles.pop;
console.log(`my last tile`, myScrabbleTiles.pop);

// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/


// 6. Complete this function. It needs to be given an array of tile objects. The function will use a for-loop to add up and return the sum of all the scores for a given array of scrabble tiles.
function calculateScore(tiles) {

}


// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".


// 8. Check whether or not your score is higher than the highScore. If your score is higher, change highScore to the new high score.


// DONE!




// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    highScore: typeof highScore !== 'undefined' ? highScore : undefined,
    myScrabbleTiles: typeof myScrabbleTiles !== 'undefined' ? myScrabbleTiles : undefined,
    removedTile: typeof removedTile !== 'undefined' ? removedTile : undefined,
    calculateScore: typeof calculateScore !== 'undefined' ? calculateScore : undefined,
    myScore: typeof myScore !== 'undefined' ? myScore : undefined,
  }
} catch (e) {
  // Do nothing
}
