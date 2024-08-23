/*

Game Description:

Tic Tac Toe is a 2-player board game played on a 3x3 grid. Players take turns
marking a square. The first player to mark 3 squares in a row wins.

Nouns & Verbs:

Nouns: board, player, square, grid
Verbs: play, mark

Board
Square
Player
- mark
- play




*/
const rlSync = require('readline-sync');

class Board {
  constructor() {
    this.reset();
  }

  reset() {
    this.squares = {};
    for (let idx = 1; idx <= 9; ++idx) {
      this.squares[idx] = new Square();
    }
  }

  display() {
    console.log('\n');
    console.log(`     |     |`);
    console.log(`  ${this.squares[1]}  |  ${this.squares[2]}  |  ${this.squares[3]}`);
    console.log(`     |     |`);
    console.log(`-----+-----+-----`);
    console.log(`     |     |`);
    console.log(`  ${this.squares[4]}  |  ${this.squares[5]}  |  ${this.squares[6]}`);
    console.log(`     |     |`);
    console.log(`-----+-----+-----`);
    console.log(`     |     |`);
    console.log(`  ${this.squares[7]}  |  ${this.squares[8]}  |  ${this.squares[9]}`);
    console.log(`     |     |`);
    console.log('\n');
  }

  displayWithClear() {
    console.clear();
    this.display();
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  isUnusedSquare(key) {
    return this.squares[key].isUnused();
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.isUnusedSquare(key));
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }
}

class Square {
  static UNUSED_SQUARE = ' ';
  static HUMAN_MARKER = 'X';
  static CPU_MARKER = 'O';

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class CPU extends Player {
  constructor() {
    super(Square.CPU_MARKER);
  }
}

class TTTGame {
  static WINNING_LINES = [
    ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], // rows
    ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"], // cols
    ["1", "5", "9"], ["3", "5", "7"],                 // diagonals
  ];

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.cpu = new CPU();
  }

  play() {
    this.displayWelcomeMessages();

    let currentPlayer = this.human;

    this.board.reset();
    this.board.display();

    while (true) {
      this.playerMoves(currentPlayer);
      if (this.gameOver()) break;

      this.board.displayWithClear();
      currentPlayer = this.togglePlayer(currentPlayer);
    }

    this.board.displayWithClear();
    this.displayResult();

    this.displayGoodbyeMessage();
  }

  displayWelcomeMessages() {
    this.clearScreen()
    this.prompt("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing! Bye.');
  }

  displayResult() {
    if (this.isWinner(this.human)) {
      this.prompt('You win this round! :)');
    } else if (this.isWinner(this.cpu)) {
      this.prompt('You lose this round! :(');
    } else {
      this.prompt('This round is a tie!');
    }
  }

  playerMoves(currentPlayer) {
    if (currentPlayer instanceof Human) {
      this.humanMoves();
    } else {
      this.cpuMoves();
    }
  }

  humanMoves() {
    let choice;
    let validChoices = this.board.unusedSquares();
    this.prompt(`Choose a square: (${TTTGame.joinOr(validChoices)}):`);

    while (true) {
      choice = rlSync.question();
      if (validChoices.includes(choice)) break;
      this.prompt('Sorry, that\'s not a choice!');
    }

    this.board.markSquareAt(Number(choice), this.human.marker);
  }

  offensiveStrategy() {
    let choice;

    TTTGame.WINNING_LINES.forEach(row => {
      if (this.board.countMarkersFor(this.cpu, row) === 2) {
        let idx = row.findIndex(key => this.board.isUnusedSquare(key));
        if (idx >= 0) choice = row[idx];
      }
    });

    return choice;
  }

  defensiveStrategy() {
    let choice;

    TTTGame.WINNING_LINES.forEach(row => {
      if (this.board.countMarkersFor(this.human, row) === 2) {
        let idx = row.findIndex(key => this.board.isUnusedSquare(key));
        if (idx >= 0) choice = row[idx];
      }
    });

    return choice;
  }

  pickCenterSquare() {
    return this.board.isUnusedSquare('5') ? '5' : null;
  }

  pickRandomSquare() {
    let randomIndex = Math.floor(Math.random() * this.board.unusedSquares().length);
    return this.board.unusedSquares()[randomIndex];
  }

  cpuMoves() {
    let choice = this.offensiveStrategy() || 
                 this.defensiveStrategy() ||
                 this.pickCenterSquare() ||
                 this.pickRandomSquare();

    this.board.markSquareAt(Number(choice), this.cpu.marker);
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.cpu);
  }

  isWinner(player) {
    return TTTGame.WINNING_LINES.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  togglePlayer(currentPlayer) {
    return currentPlayer === this.human ? this.cpu : this.human;
  }

  clearScreen() {
    console.clear();
  }

  pressEnter() {
    this.prompt('\nPress [enter] to continue');
    rlSync.question();
  }

  prompt(message) {
    console.log(`==> ${message}`);
  }

  static joinOr(choices, char = ', ', conj = 'or') {
    function insertStringAt(original, index, stringToInsert) {
      return original.slice(0, index) + stringToInsert + original.slice(index);
    }
  
    return choices.length > 2 ? 
           insertStringAt(choices.join(char), -2, ` ${conj}`) : choices.join(` ${conj} `);
  }
}

const game = new TTTGame()
game.play();
