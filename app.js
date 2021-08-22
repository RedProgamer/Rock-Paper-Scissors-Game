const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

const playerChoice = document.querySelector('.player-choice');
const playerScore = document.querySelector('.player-score');
const computerChoice = document.querySelector('.computer-choice');
const computerScore = document.querySelector('.computer-score');

const gameStatus = document.getElementById('result');

const choices = ['r', 'p', 's'];
let userPoints = 0, computerPoints = 0;

const computerRandomElement = function() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function computerEmoji(computerChoice) {
    // const computerChoice = computerRandomElement();

    if(computerChoice === 'r')
        return '👊';
    else if(computerChoice === 'p')
        return '🤚';
    else if(computerChoice === 's')
        return '✌️';
}

function gameChoices(comChoice, userChoiceEMJ, computerChoiceEMJ, beats, loses) {
    // const computerChoice = computerRandomElement();
    let playerWon = null;

    if(comChoice === beats) {
        userPoints++;
        playerWon = true;
    }
    else if(comChoice === loses) {
        computerPoints++;
        playerWon = false;
    }else {
        playerWon = null;
    }

    console.log(comChoice);
    
    return {
        user: userPoints,
        comp: computerPoints,
        userChoice: userChoiceEMJ,
        computerChoice: computerChoiceEMJ,
        playerStatus: playerWon
    };
};

function uiUpdate(data) {
    playerScore.textContent = data.user;
    playerChoice.textContent = data.userChoice;
    
    computerScore.textContent = data.comp;
    computerChoice.textContent = data.computerChoice;
    
    gameStatus.style.display = 'block';

    if(data.playerStatus) {
        gameStatus.innerText = `Player won against computer`;
    }else if(data.playerStatus === null){
        gameStatus.innerText = 'Draw!';
    }else if(!data.playerStatus) {
        gameStatus.innerText = `Computer won against player`;
    }

}

function submittedRock() {

    // Add Click Effect
    rock.style.borderColor = '#10ad1c';

    setTimeout(() => {
        rock.style.borderColor = '#fff';
    }, 100);
    
    const computerChoice = computerRandomElement();
    const userChoice = rock.textContent;
    const computerEMJ = computerEmoji(computerChoice);
    
    const data = gameChoices(computerChoice, userChoice, computerEMJ, 's', 'p');
    uiUpdate(data);
}

function submittedPaper() {

    // Add Click Effect
    paper.style.borderColor = '#10ad1c';

    setTimeout(() => {
        paper.style.borderColor = '#fff';
    }, 100);

    const computerChoice = computerRandomElement();
    const userChoice = paper.textContent;
    const computerEMJ = computerEmoji(computerChoice);

    const data = gameChoices(computerChoice, userChoice, computerEMJ, 'r', 's');
    uiUpdate(data);
}

function submittedScissor() {

    // Add Click Effect
    scissor.style.borderColor = '#10ad1c';

    setTimeout(() => {
        scissor.style.borderColor = '#fff';
    }, 100);
    
    const computerChoice = computerRandomElement();
    const userChoice = scissor.textContent;
    const computerEMJ = computerEmoji(computerChoice);
    
    const data = gameChoices(computerChoice, userChoice, computerEMJ, 'p', 'r');
    uiUpdate(data);
}

function getPoints() {
    return {
        user: userPoints,
        comp: computerPoints
    }
}


rock.addEventListener('click', submittedRock);
paper.addEventListener('click', submittedPaper);
scissor.addEventListener('click', submittedScissor);
