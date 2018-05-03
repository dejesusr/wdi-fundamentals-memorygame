var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [0, 1, 2, 3];
var cardOne = cards[0];
var cardTwo = cards[1];
cardsInPlay.push("queen", "king");
console.log("User flipped queen");
console.log("User flipped king");
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1] || cardsInPlay[2] === cardsInPlay[3]) {
    alert("You found a match!");
} else if (cardsInPlay[1] !== cardsInPlay[2]) {
    alert("Sorry, try again");
}
