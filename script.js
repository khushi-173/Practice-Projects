function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber >= 0 && randomNumber <= 1) {
    return 'Bat';
  } else if (randomNumber >= 1 && randomNumber <= 2) {
    return 'Ball';
  } else {
    return 'Stump';
  }
}


function getResult(userMove, computerMove){
    if (userMove === computerMove ){
        return `It's a tie`;
    }
    if(userMove === 'Bat' && computerMove === 'Ball'){
        return 'User won';
    }else if(userMove === 'Bat' && computerMove === 'Stump')
      {
        return 'Computer won';
    }
    else if(userMove === 'Ball' && computerMove === 'Bat'){
      return 'Computer won';
    }
    else if(userMove === 'Ball' && computerMove === 'Stump'){
      return 'User won';
    }
    else if(userMove === 'Stump' && computerMove === 'Bat'){
      return 'User won';
    }else if(userMove === 'Stump' && computerMove === 'Ball'){
      return 'Computer won';
    }
  }

  function showResult(userChoice,computerChoice,resultMsg){
    alert(
          `You have chosen ${userChoice}. Computer choice is ${computerChoice}. ${resultMsg}`
        );
        return
  }

  localStorage.setItem