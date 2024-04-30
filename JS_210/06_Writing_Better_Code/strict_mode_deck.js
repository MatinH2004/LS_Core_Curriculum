/* SLOPPY MODE

SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
         "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  allCards = () => {
    return this.SUITS.reduce((deck, suit) => {
      this.RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (counter = 0; counter < 0400; counter += 1) {
    randomIndex1 = randomCardIndex();
    randomIndex2 = randomCardIndex();
    tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex() {
    return Math.floor(Math.random() * this.deck.length);
  }
}

console.log(createDeck());

*/

"use strict";

const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  const allCards = () => {
    return SUITS.reduce((deck, suit) => {
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  let deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (let counter = 0; counter < 400; counter += 1) {
    let randomIndex1 = randomCardIndex();
    let randomIndex2 = randomCardIndex();
    let tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex() {
    return Math.floor(Math.random() * deck.length);
  }
}

console.log(createDeck());

/* OUTPUT

[
  'King of Hearts',    '9 of Clubs',       '6 of Hearts',
  '10 of Hearts',      'Ace of Clubs',     '3 of Clubs',
  '9 of Hearts',       'Ace of Diamonds',  '2 of Hearts',
  'Ace of Spades',     '8 of Spades',      '8 of Clubs',
  'Queen of Diamonds', 'King of Spades',   '4 of Clubs',
  '5 of Diamonds',     '7 of Diamonds',    '2 of Clubs',
  'Queen of Clubs',    'Jack of Diamonds', '9 of Diamonds',
  '6 of Spades',       '9 of Spades',      '10 of Spades',
  'Jack of Clubs',     'Ace of Hearts',    'King of Clubs',
  '7 of Clubs',        '5 of Hearts',      '8 of Hearts',
  '2 of Diamonds',     '5 of Spades',      '4 of Spades',
  'King of Diamonds',  '3 of Spades',      '6 of Diamonds',
  '2 of Spades',       '8 of Diamonds',    'Jack of Hearts',
  'Queen of Spades',   '4 of Diamonds',    'Jack of Spades',
  '7 of Hearts',       '7 of Spades',      '5 of Clubs',
  '6 of Clubs',        '10 of Clubs',      'Queen of Hearts',
  '4 of Hearts',       '3 of Hearts',      '10 of Diamonds',
  '3 of Diamonds'
]

*/