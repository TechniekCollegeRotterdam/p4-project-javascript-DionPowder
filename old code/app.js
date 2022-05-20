const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const resultOutput = document.getElementById("result");

let possibleChoices = document.querySelectorAll("button");

let player;
let computer;
let result;



possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();
    getResult();
}));

const generateComputerChoice = function(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computer = "rock";
    }
  
    if (randomNumber === 2) {
      computer = "paper";
  }
  
  if (randomNumber === 3) {
      computer = "scissors";
  }
  computerChoice.innerHTML = computer;
  
  }

const getResult = function(){

    if (computer === player){
        result = "gelijkspel";
    }
    if (computer === 'rock' && player === 'paper'){
        result = "je hebt gewonnen";
    }
    if (computer === 'paper'&& player === 'scissors'){
        result = "je hebt gewonnen";
    }
    if (computer === 'scissors'&& player === 'rock'){
        result = "je hebt gewonnen";
    }
    if (computer === 'rock'&& player === 'scissors'){
        result = "je hebt verloren";
    }
    if (computer === 'paper'&& player === 'rock'){
        result = "je hebt verloren";
    }
    if (computer === 'scissors'&& player === 'paper'){
        result = "je hebt verloren";
    }
    resultOutput.innerHTML = result;

   }


 