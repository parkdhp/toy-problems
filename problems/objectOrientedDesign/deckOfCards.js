/**Deck of Cards
 * Design the data structures for a generic deck of cards. Explain how you
 * would subclass the data structures to implement blackjack.
 */

class Card {
  constructor(suit, number) {
    this.suit = suit;
    this.number = number;
    this.value = `${this.number}${this.suit}`;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.newDeck();
  }
  newDeck() {
    this.clear();
    let suits = ['♥', '♣', '♠', '♦'],
      numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    suits.forEach((suit) => {
      numbers.forEach((number) => {
        this.cards.push(new Card(suit, number));
      });
    });
  }
  clear() {
    this.cards = [];
  }
  shuffle() {
    const swap = (firstIndex, secondIndex, cards) => {
      let temp = cards[firstIndex];
      cards[firstIndex] = cards[secondIndex];
      cards[secondIndex] = temp;
    }
    for (let i = 0; i < this.cards.length; i++) {
      let randomIndex = i + Math.floor(Math.random() * (this.cards.length - i));
      swap(i, randomIndex, this.cards);
    }
  }
  deal() {
    return this.cards.pop();
  }
}

class Dealer {
  constructor() {
    this.deck = new Deck;
    this.hand = [];
  }
  shuffleCards() {
    this.deck.shuffle();
  }
  dealCard() {
    return this.deck.deal();
  }
  receiveCard(card) {
    this.hand.push(card);
  }
}

class Player {
  constructor() {
    this.hand = [];
  }
  receiveCard(card) {
    this.hand.push(card);
  }
  discardHand() {
    this.hand = [];
  }
}

class Table {
  constructor() {
    this.dealer = new Dealer;
    this.players = [];
  }
  join(player) {
    if (this.players.length > 5) {
      console.error('Table is full.');
    } else if (this.players.indexOf(player) > -1) {
      console.error('Player is already in game.');
    } else {
      this.players.push(player);
    }
  }
  runGame() {
    const dealer = this.dealer;
    const players = this.players;

    if (!players.length) {
      console.error('Insufficient number of players.');
    } else {
      console.log('Starting round of blackjack');
      dealer.shuffleCards();
      for (let i = 0; i < 2; i++) {
        players.forEach(player => {
          player.receiveCard(dealer.dealCard());
        });
        dealer.receiveCard(dealer.dealCard());
      }
      console.log('dealer hand', dealer.hand.map((card) => card.value));
      players.forEach((player, i) => {
        console.log(`Player #${i} hand`, player.hand.map((card) => card.value));
      });
    }
  }
}

const table = new Table();
const peter = new Player();
const david = new Player();
const edward = new Player();
const mitch = new Player();

table.join(peter);
table.join(david);
table.join(edward);
table.join(mitch);

//deals first pair of hands
table.runGame();