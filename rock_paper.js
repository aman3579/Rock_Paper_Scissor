const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const messageDisplay = document.querySelector('#message h3');
// messageDisplay.innerHTML = "HELLO";
//we have three options. Computer need to generate one value out of these three.
const options = ['rock','paper','scissors']
let playerScore=0, computerScore=0;
playerScoreDisplay.innerText = playerScore;

const randomChoice = () => options[Math.floor(Math.random() * options.length)];

  
const playRound = (playerChoice, computerChoice)=>{
    switch(playerChoice) {
        case 'rock':
            switch(computerChoice){
                case 'rock':
                    messageDisplay.innerHTML = " Draw!! ";
                    break;
                case 'paper':
                    messageDisplay.innerHTML = 'YOU Loose!! Paper beats rock!';
                    computerScoreDisplay.innerHTML = ++computerScore;
                    break;
                case 'scissors':
                    messageDisplay.innerHTML = "You win!! Rock beat scissors!";
                    playerScoreDisplay = ++playerScore;     
                    break;              
            }
            break;
        case 'paper':
            switch(computerChoice) {
                case 'rock':
                    messageDisplay.innerHTML = "You win!! Paper beats rock!";
                    playerScoreDisplay.innerHTML = ++playerScore;
                    break;
                case 'paper':
                    messageDisplay.innerHTML = "Draw!!";
                    break;    
                case 'scissors':
                    messageDisplay.innerHTML = "You loose!! Scissors beat paper!";
                    computerScoreDisplay.innerHTML = ++computerScore; 
                    break;   
            }    
            break;

        case 'scissors':
            switch(computerChoice){
                case 'rock':
                    messageDisplay.innerHTML='You Lose! Rock beats!!';
                    computerScoreDisplay.innerHTML = ++computerScore;
                    break;

                case 'paper':
                    messageDisplay.innerHTML = "You win! Scissor beat paper!";
                    playerScoreDisplay.innerHTML = ++playerScore;
                    break;
                    
                case 'scissor':
                    messageDisplay.innerHTML = "Draw!!"
                    break;    
            }    
            break;
        default:
            messageDisplay.innerHTML = 'Invalid Input';
            break;    

    }
};

rock.addEventListener('click',()=>playRound('rock', randomChoice()))
paper.addEventListener('click',()=>playRound('paper', randomChoice()))
scissors.addEventListener('click',()=>playRound('scissors', randomChoice()))

