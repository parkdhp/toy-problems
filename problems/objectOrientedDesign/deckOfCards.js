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
