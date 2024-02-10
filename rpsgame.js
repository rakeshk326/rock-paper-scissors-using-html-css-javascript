let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function calculateScore() {
  document.querySelector('.js-win').innerHTML = `Wins : ${score.wins}`;
  document.querySelector('.js-lose').innerHTML = `Losses : ${score.losses}`;
  document.querySelector('.js-tie').innerHTML = `Ties : ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}

let isActive = true;
function playGame(playerMove) {
    if (!isActive) {
      return;
    }

    const computerMove = pickComputerMove();
    let result = '';
  
    if (playerMove === 'Rock') {
      if (computerMove === 'Rock') {
        result = 'Tie';
      } else if (computerMove === 'Paper') {
        result = 'You Lose';
      } else if (computerMove === 'Scissors') {
        result = 'You Win';
      }
    }
  
    else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
        result = 'You Win';
      } else if (computerMove === 'Paper') {
        result = 'Tie';
      } else if (computerMove === 'Scissors') {
        result = 'You Lose';
      }
    }
  
    else if (playerMove === 'Scissors') {
      if (computerMove === 'Rock') {
        result = 'You Lose';
      } else if (computerMove === 'Paper') {
        result = 'You Win';
      } else if (computerMove === 'Scissors') {
        result = 'Tie';
      }
    }

    if(result === 'You Win') {
        score.wins += 1;
    } else if(result === 'You Lose') {
        score.losses += 1;
    } else if(result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));
  
    calculateScore();

    document.querySelector('.player').innerHTML = `YOU`;
    document.querySelector('.cpu').innerHTML = `CPU`;

    document.querySelector('.player-result').innerHTML = `<img class="result-pic" src="Images/Player-${playerMove}.png">`;
    document.querySelector('.cpu-result').innerHTML = `<img class="result-pic" src="Images/Computer-${computerMove}.png">`;

    if(score.wins == 10) {
      document.querySelector('.js-result').innerHTML = `Congrats ! You Won !`;
      document.querySelector('.js-result').style.display = 'block';
      document.querySelector('.button-container').style.display = 'none';
      document.querySelector('.result-container').style.display = 'none';
      isActive = false;
    } else if(score.losses == 10) {
      document.querySelector('.js-result').innerHTML = `Brrrrr ! You lose`;
      document.querySelector('.js-result').style.display = 'block';
      document.querySelector('.button-container').style.display = 'none';
      document.querySelector('.result-container').style.display = 'none';
      isActive = false;
    } else if(score.ties == 10) {
      document.querySelector('.js-result').innerHTML = `Well tried ! That's a tie`;
      document.querySelector('.js-result').style.display = 'block';
      document.querySelector('.button-container').style.display = 'none';
      document.querySelector('.result-container').style.display = 'none';
      isActive = false;
    }
}

function reset() {
  score.wins = 0,
  score.losses = 0,
  score.ties = 0
  localStorage.removeItem('score');
  calculateScore();
  isActive = true;
};