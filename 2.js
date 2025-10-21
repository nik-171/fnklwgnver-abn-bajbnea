function encodeCards(cards) {
    return cards.map(card => {
        const pattern = /^\d{4} \d{4} \d{4} \d{4}$/;
        if (!pattern.test(card)) {
            return null;
        }
        const parts = card.split(' ');
        return `${parts[0]} **** **** ${parts[3]}`;
    });
}

const cardNumbers = [
    '4000 0012 0056 9499', 
    '4000 0013 5456 7379',
    '4000 001 5456 79',
    '4000 001414569869',
    '4000 0014 1456 9869'
];

console.log(encodeCards(cardNumbers));

module.exports = { encodeCards };