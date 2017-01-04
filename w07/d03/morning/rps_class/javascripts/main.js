import $ from 'jquery'

(function(){

  class Game {

    constructor(){
      this.playerScore = 0;
      this.computerScore = 0;
      this.hands = ['rock','paper','scissors'];
    }

    winGame(playerHand,computerHand){
      this.playerScore+=1;
      $('.roundoutcome').text(`${playerHand} beats ${computerHand}, you win!`);
      $('.playerscore .score').text(this.playerScore);
    }

    loseGame(playerHand,computerHand){
      this.computerScore+=1;
      $('.roundoutcome').text(`${computerHand} beats ${playerHand}, you lose!`);
      $('.computerscore .score').text(this.computerScore);
    }

    tieGame(){
      $('.roundoutcome').text(`Tie Game.`);
    }

    computerRoll(){
      // random number between 0-2
      let randomNumber = Math.floor((Math.random() * 3));
      return this.hands[randomNumber];
    }

    decideWinner(playerHand,computerHand){
      if(playerHand === 'rock'){
        // What is the computers hand??
        if(computerHand === 'paper'){
          // you lose
          this.loseGame(playerHand,computerHand);
        } else if(computerHand === 'scissors'){
          // you win
          this.winGame(playerHand,computerHand);
        } else {
          // tie game
          this.tieGame(playerHand,computerHand);
        }

      } else if(playerHand === 'paper'){
        // What is the computers hand??
        if(computerHand === 'scissors'){
          // you lose
          this.loseGame(playerHand,computerHand);
        } else if(computerHand === 'rock'){
          // you win
          this.winGame(playerHand,computerHand);
        } else {
          // tie game
          this.tieGame(playerHand,computerHand);
        }
      } else if(playerHand === 'scissors'){
        // What is the computers hand??
        if(computerHand === 'rock'){
          // you lose
          this.loseGame(playerHand,computerHand);
        } else if(computerHand === 'paper'){
          // you win
          this.winGame(playerHand,computerHand);
        } else {
          // tie game
          this.tieGame(playerHand,computerHand);
        }
      }
    }

    playGame(playerHand){
      this.decideWinner( playerHand, this.computerRoll() );
    }
  }

  function addEventListeners(){
    let theGame = new Game();

    $('.gamebuttons .rock').on('click', (e) => {
      theGame.playGame('rock');
    });

    $('.gamebuttons .paper').on('click', (e) => {
      theGame.playGame('paper');
    });

    $('.gamebuttons .scissors').on('click', (e) => {
      theGame.playGame('scissors');
    });
  }

  function main(){
    addEventListeners();
  }

  $(document).ready(main);
})();
