
const playersCard = document.getElementById('players-card')
const computersCard = document.getElementById('computers-card')
const playerResult = document.getElementById('player-result')
const computerResult = document.getElementById('computer-result')
const finalResults = document.getElementById('final-results')
const possibleChoices = document.getElementsByClassName('btn')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
     userChoice = e.target.id
     playersCard.innerHTML = userChoice
}))




