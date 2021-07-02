
/* const playersChoice = document.getElementById('btn') */
const computersChoice = document.getElementById('computers-card')
const gameResults = document.getElementById('results')


const cards = ['rock', 'paper', 'scissors']

const playersChoice  = document.getElementById('btn').addEventListener('click', (e) => {
    playersChoice = e.target.id 
    playersChoice.innerHTML = playersChoice
    generateComputersChoice
    getResult()
})

const generateComputersChoice = () => {
    const randomChoice = cards[Math.floor(Math.random() * cards.lenght)]
    computersChoice = randomChoice
    computersChoice.innerHTML = 'Computers card' + computersChoice     
}

function getResult() {
    if (playersChoice === 'paper' && computersChoice === 'rock') {
        result = 'Yaaaay! You win!'
    }

    if (playersChoice === 'rock' && computersChoice === 'scissors') {
        result = 'Yupi! A win for you!'
    }

    if (playersChoice === 'scissors' && computersChoice === 'paper') {
        result = 'BOOM! Good for you'
    }

    if (playersChoice === 'rock' && computersChoice === 'paper') {
        result = 'Soz, you lose!'
    }

    if (playersChoice === 'paper' && computersChoice === 'scissors') {
        result = 'Sorry, not this time...'
    }

    if (playersChoice === 'scissors' && computersChoice === 'rock') {
        result = 'Sad face for you...'
    }

    if (playersChoice === computersChoice) {
        result = 'Everybody wins!'
    }
    
}
