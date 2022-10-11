//* Annonymous objects
/*
    → objects without a name
    → Not directly referenced
    → Less syntax (no need for unique names)
*/

class Card {
     constructor(value, suit) {
        this.value = value
        this.suit = suit
     }
}

/*  Named objects
let card1 = new Card("A", "Hearts")
let card2 = new Card("A", "Clubs")
let card3 = new Card("A", "Diamonds")
let card4 = new Card("A", "Spades")
let card5 = new Card("2", "Hearts")
let card6 = new Card("2", "Clubs")
let card7 = new Card("2", "Diamonds")
let card8 = new Card("2", "Spades")

let cards = [card1, card2, card3, card4, card5, card6, card7, card8]

console.log(`${card1.value} of ${card1.suit}`)
console.log(`${cards[2].value} of ${cards[2].suit}`)
*/

//* Annonymous Objects
let cards = [
    new Card("A", "Hearts"),
    new Card("A", "Clubs"),
    new Card("A", "Diamonds"),
    new Card("A", "Spades"),
    new Card("2", "Hearts"),
    new Card("2", "Clubs"),
    new Card("2", "Diamonds"),
    new Card("2", "Spades")
]

console.log(cards)
console.log(`${cards[4].value} of ${cards[4].suit}`)

cards.forEach(card => console.log(`${card.value} of ${card.suit}`))
