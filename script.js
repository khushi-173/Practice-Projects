let scoreStr = localStorage.getItem("Score");
let score;
resetScore(scoreStr);
function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };

  score.displayScore = function () {
    return `won : ${score.win}, lost: ${score.lost}, tie : ${score.tie}`;
  };
  showResult();
}

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber >= 0 && randomNumber <= 1) {
    return "Bat";
  } else if (randomNumber >= 1 && randomNumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function getResult(userMove, computerMove) {
  if (userMove === computerMove) {
    score.tie++;
    return `It's a tie`;
  }
  if (userMove === "Bat" && computerMove === "Ball") {
    score.win++;
    return "User won";
  } else if (userMove === "Bat" && computerMove === "Stump") {
    score.lost++;
    return "Computer won";
  } else if (userMove === "Ball" && computerMove === "Bat") {
    score.lost++;
    return "Computer won";
  } else if (userMove === "Ball" && computerMove === "Stump") {
    score.win++;
    return "User won";
  } else if (userMove === "Stump" && computerMove === "Bat") {
    score.win++;
    return "User won";
  } else if (userMove === "Stump" && computerMove === "Ball") {
    score.lost++;
    return "Computer won";
  }
}

function showResult(userChoice, computerChoice, resultMsg) {
  localStorage.setItem("Score", JSON.stringify(score));
  
  document.querySelector('#user-move').innerText =
    userChoice != undefined ? `You have chosen ${userChoice}` : ' ';
  
  document.querySelector("#computer-move").innerText = 
    computerChoice != undefined ?`Computer choice is ${computerChoice}` : ' ';
  
  document.querySelector('#tie').innerText = 
    resultMsg != undefined ?`${resultMsg}` : ' ';
  
  document.querySelector('#result').innerText = `${score.displayScore()}`
}
