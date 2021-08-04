// document.addEventListener('DOMContentLoaded', () => {
 
    const cards = {
        card1: 'card-1',
        card2: 'card-2',
        card3: 'card-3',
        card4: 'card-4',
        card5: 'card-5',
        card6: 'card-6' 
    };

    const grid = document.querySelector('.grid')

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
           //  card.addEventListener('click', flipcard)
           grid.appendChild(card)
        }
    }

    createBoard()


















