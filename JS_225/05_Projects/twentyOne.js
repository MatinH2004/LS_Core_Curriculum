/*
Twenty-One is a card game consisting of a dealer and a player, where the participants try to get as close to 21 as possible without going over.

Here is an overview of the game:
- Both participants are initially dealt 2 cards from a 52-card deck.
- The player takes the first turn, and can "hit" or "stay".
- If the player busts, he loses. If he stays, it's the dealer's turn.
- The dealer must hit until his cards add up to at least 17.
- If he busts, the player wins. If both player and dealer stays, then the highest total wins.
- If both totals are equal, then it's a tie, and nobody wins.

Nouns: card, player, dealer, participant, deck, game, total
Verbs: deal, hit, stay, busts

Player
- hit
- stay
- busted?
- total
Dealer
- hit
- stay
- busted?
- total
- deal (should this be here, or in Deck?)
Participant
Deck
- deal (should this be here, or in Dealer?)
Card
Game
- start

Orchestration Engine:

class Game {
  start() {
  deal_cards
  show_initial_cards
  player_turn
  dealer_turn
  show_result
  }
}


*/

const readline = require('readline-sync');

class Card {
  static SUITS = ['H', 'D', 'S', 'C'];
  static FACES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];

  constructor(suit, face) {
    this.suit = suit;
    this.face = face;
  }

  toString() {
    return `The ${this.getFace()} of ${this.getSuit()}`;
  }

  getFace() {
    switch (this.face) {
      case 'J':
        return 'Jack';
      case 'Q':
        return 'Queen';
      case 'K':
        return 'King';
      case 'A':
        return 'Ace';
      default:
        return this.face;
    }
  }

  getSuit() {
    switch (this.suit) {
      case 'H':
        return 'Hearts';
      case 'D':
        return 'Diamonds';
      case 'S':
        return 'Spades';
      case 'C':
        return 'Clubs';
    }
  }

  isAce() {
    return this.getFace() === 'Ace';
  }

  isJack() {
    return this.getFace() === 'Jack';
  }

  isQueen() {
    return this.getFace() === 'Queen';
  }

  isKing() {
    return this.getFace() === 'King';
  }
}

class Deck {
  static shuffle = require('shuffle-array');

  constructor() {
    this.cards = [];

    Card.SUITS.forEach(suit => {
      Card.FACES.forEach(face => {
        this.cards.push(new Card(suit, face));
      }, this);
    }, this);

    Deck.shuffle(this.cards);
  }

  dealOne() {
    return this.cards.pop();
  }
}

class Player {
  constructor() {
    this.resetHand();
  }

  showFlop() {
    console.log('\n===== Your Hand =====');
    this.cards.forEach(card => {
      console.log(`=> ${card}`);
    });
    console.log('---------');
    console.log(`Total: ${this.total()}`);
  }

  total() {
    let total = 0;
    this.cards.forEach(card => {
      if (card.isAce()) {
        total += 11;
      } else if (card.isJack() || card.isQueen() || card.isKing()) {
        total += 10;
      } else {
        total += parseInt(card.getFace(), 10);
      }
    });

    // correct for aces (ace value can be 1 or 11)
    let numberOfAces = this.cards.filter(card => card.isAce())
                                 .forEach(() => {
                                  if (total > 21) {
                                    total -= 10;
                                  }
                                 });

    return total;
  }

  addCard(newCard) {
    this.cards.push(newCard);
  }

  isBusted() {
    return this.total() > 21;
  }

  isTwentyOne() {
    return this.total() === 21;
  }

  resetHand() {
    this.cards = [];
  }
}

class Human extends Player {}

class Dealer extends Player {
  showFlop(reveal = false) {
    console.log('\n===== Dealer\'s Hand =====');
    if (reveal) {
      this.cards.forEach(card => {
        console.log(`=> ${card}`);
      });
      console.log('---------');
      console.log(`Total: ${this.total()}\n`);
    } else {
      console.log(`=> ${this.cards[0]}`);
      console.log('=> ??\n');
    }
  }
}

const Displayable = {
  prompt(message) {
    console.log(`=> ${message}`);
  },

  pressEnter() {
    this.prompt('Press [enter] to continue');
    readline.question();
  },

  displayWelcomeMessage() {
    console.clear();
    this.prompt('Welcome to Twenty-One!\n');
    this.prompt('Try to get as close to 21 without going over.')
    this.prompt('If you go over, you BUST, but if you get 21, you WIN!\n');
    this.pressEnter();
  },

  displayGoodbyeMessage() {
    this.prompt('Thanks for playing! Bye now.')
  },

  displayInitialCards() {
    console.clear();
    this.prompt('Dealing cards...')
    this.player.showFlop();
    this.dealer.showFlop();
  },

  revealHands() {
    console.clear();
    console.log('\n***** GAME RESULT *****');
    [this.player, this.dealer].forEach(person => person.showFlop(true));
  },

  displayResult() {
    const playerTotal = this.player.total();
    const dealerTotal = this.dealer.total();

    if (playerTotal > 21) {
      this.prompt('You busted! Dealer wins!');
    } else if (dealerTotal > 21) {
      this.prompt('Dealer busted! You win!');
    } else if (playerTotal > dealerTotal) {
      this.prompt('You win!');
    } else if (dealerTotal > playerTotal) {
      this.prompt('You lose!');
    } else {
      this.prompt('It\s a tie!');
    }

    this.pressEnter();
  },
}

class TwentyOne {
  constructor() {
    this.player = new Human();
    this.dealer = new Dealer();
  }

  play() {
    this.displayWelcomeMessage()
    
    while (true) {
      this.playOneGame();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  }

  playOneGame() {
    this.initialDeal();
    this.displayInitialCards();
    this.playerTurn();

    if (!this.player.isBusted()) {
      this.dealerTurn();
    }

    this.revealHands();
    this.displayResult();
  }

  initialDeal() {
    this.deck = new Deck();

    this.player.resetHand();
    this.dealer.resetHand();
    for (let count = 0; count < 2; count++) {
      this.player.addCard(this.deck.dealOne());
      this.dealer.addCard(this.deck.dealOne());
    }
  }

  playerTurn() { // fix
    let choice;

    while (true) {
      if (this.player.isBusted()) break;

      this.prompt('Do you want to hit or stay? [h] / [s]:');
      choice = readline.question().trim().toLowerCase();
      
      if (choice.startsWith('h')) {
        this.player.addCard(this.deck.dealOne());
        this.player.showFlop();
      } else if (choice.startsWith('s')) {
        break;
      } else {
        this.prompt('Sorry, that\'s not a valid choice.');
      }
    }
  }

  dealerTurn() {
    while (true) {
      let score = this.dealer.total();
      if (score >= 17) break;
      this.prompt('The dealer hits!\n');
      this.dealer.addCard(this.deck.dealOne());
    }
    this.prompt('The dealer stays!');
  }

  playAgain() {
    this.prompt('Play again? [y] / [n]:');

    let choice;
    while (true) {
      choice = readline.question().trim().toLowerCase();
      if (choice.startsWith('y')) return true;
      if (choice.startsWith('n')) return false;
      this.prompt('Sorry that\'s not a valid choice.');
    }
  }
}

Object.assign(TwentyOne.prototype, Displayable);

const game = new TwentyOne();
game.play();