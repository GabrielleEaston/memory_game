//let cardOne = "queen";
//let cardTwo = "king";
//let cardThree = "queen";
//let cardFour = "king";
const cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    }, {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    }, {
        rank: "king",
        suit: "diamond",
        cardImage: "images/king-of-diamonds.png"
    }

];
cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
};


function flipCard() {
    let cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
    //    let cardOne = cards[0];
    //    cardsInPlay.push(cardOne);
    //    console.log("User flipped " + cardOne);
    //    let cardTwo = cards[2];
    //    cardsInPlay.push(cardTwo);
    //    console.log("User flipped " + cardTwo)
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
    //    flipCard(0);
    //flipCard(2);

    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit);
};

function createBoard() {
    for (i = 0; i < cards.length; i++) {
        let cardElement = document.createElement('img');
        //        let cardElement2 = document.createElement('img');
        //        let cardElement3 = document.createElement('img');
        //        let cardElement4 = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');

        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        let boardGame = document.getElementById('game-board');

        boardGame.appendChild(cardElement);
    }

};
createBoard();

console.log(cards[2].cardImage);
console.log(cards[2].suit);
