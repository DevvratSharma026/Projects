const numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];
let flippedCards = [];
let matchCards = [];
let canFlip = true;
var totalClicks = 0;


function createCard(number){
    const card = document.createElement("div");
    card.classList.add('card');
    card.dataset.number = number;
    card.textContent = '?';
    card.addEventListener('click', flipCard)
    return card;
}

function flipCard(){
    if(!canFlip || flippedCards.length >= 2 || this.classList.contains('flipped') || matchCards.includes(this)){
        return;
    }

    this.classList.add('flipped');
    this.textContent = this.dataset.number;
    flippedCards.push(this);
    totalClicks++;
    if(flippedCards.length === 2){
        checkMatch();
    }
}

function checkMatch(){
    canFlip = false;
    setTimeout(()=> {
        const [card1, card2] = flippedCards;
        if(card1.dataset.number === card2.dataset.number){
            matchCards.push(card1, card2);
            if(matchCards.length === numbers.length){
                alert(`Congratulations You have won the game!!! after flipping the cards ${totalClicks} times.`);
            }
        }
            else{
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                card1.textContent = '?';
                card2.textContent = '?';
            }
            flippedCards = [];
            canFlip = true;
    }, 500);
}

function initGame(){
    const gameBoard = document.querySelector('.game-board');
    numbers.sort(() => Math.random() - 0.5);
    numbers.forEach(number => {
        const card = createCard(number);
        gameBoard.appendChild(card);
    });
}

initGame();