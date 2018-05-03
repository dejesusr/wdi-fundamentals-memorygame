var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [0, 1, 2, 3];
cardsInPlay.push("king");
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again");
    }
var flipCard = function (cardId) {
    console.log("User flipped " + cards[cardId]);
}

flipCard(0);
flipCard(2);

