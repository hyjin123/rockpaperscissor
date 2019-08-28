

let gameOptions = ["Rock", "Paper", "Scissor"]


let computerPlay = function () {
    return Math.floor(Math.random() * gameOptions.length)
}

let game = function (playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
}