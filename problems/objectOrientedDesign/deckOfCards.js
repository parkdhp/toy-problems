/**Deck of Cards
 * Design the dats structures for a generic deck of cards. Explain how you
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

