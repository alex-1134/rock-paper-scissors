




const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.getElementById.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', () => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
}))
    







































/*
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

*/


