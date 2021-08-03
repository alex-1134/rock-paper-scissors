document.addEventListener('DOMContentLoaded', () => {
 
    const cardArray = [ 
        {
            name: '1',
            img: 'images/1.jpg'
        },
        {
            name: '2',
            img: 'images/2.jpg'
        },
        {
            name: '3',
            img: 'images/3.jpg'
        },
        {
            name: '4',
            img: 'images/4.jpg'
        },
        {
            name: '5',
            img: 'assets/images/5.jpg'
        },
        {
            name: '6',
            img: 'images/6.jpg'
        },
        {
            name: '7',
            img: 'images/7.jpg'
        },
        {
            name: '8',
            img: 'images/8.jpg'
        },
    ]

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


















})