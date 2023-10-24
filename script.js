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
let tile6 = {letter: "F", score: 4};

myScrabbleTiles.push("draw six tiles:", tile14, tile11, tile26, tile24, tile4, tile1);
console.log(myScrabbleTiles);

// 4. Remove the last tile from myScrabbleTiles and save it in a variable named removedTile.
let removedTile = myScrabbleTiles.pop();
console.log(`discard tile:`, removedTile);
console.log(myScrabbleTiles);
// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/
//myScrabbleTiles = myScrabbleTiles.unshift(let tile6 = {letter: "F", score: 4};);  I attempted to assign the tile and add it to myScrabbleTiles at the same time,
//it didn't work so I'm guessing I need to create it as a global variable first.
let newTile = myScrabbleTiles.push(tile6);
console.log("draw new tile:", newTile); // I can't figure out why this is logging only the array length(7) and not the tile6 object.
console.log(myScrabbleTiles);

// 6. Complete this function. It needs to be given an array of tile objects. The function will use a for-loop to add up and return the sum of all the scores for a given array of scrabble tiles.
let myScore = 0

function calculateScore(myScrabbleTiles) {
  myScrabbleTiles.forEach((element)=> {
  console.log(element.score)
  });
  myScore += myScrabbleTiles(element.score);}
calculateScore
console.log(calculateScore);  //I feel like I'm so close to getting this to work but I'm not certain if you can add with the forEach operator

// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".
console.log(calculateScore(){
 return myScore = calculateScore;
});

// 8. Check whether or not your score is higher than the highScore. If your score is higher, change highScore to the new high score.
if (myScore > highScore) {
  highScore = myScore;
};

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
