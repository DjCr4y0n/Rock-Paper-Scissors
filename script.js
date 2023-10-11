function getComputerChoice()
{
    let arr = ["rock", "paper", "scissors"];
    return arr[(Math.floor(Math.random() * arr.length))];
}

window.onload=function(){
    let playerScore = 0;
    let computerScore = 0;

    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");
    rock.addEventListener('click', round);
    paper.addEventListener('click', round);
    scissors.addEventListener('click', round);

    function playerChoice(event)
    {
        return event.value;
    }



    function round(playerSelection)
    {
        let computerSelection = getComputerChoice();
        if (playerSelection == computerSelection)
        {
            console.log(playerSelection,computerSelection);
            console.log("It's a tie");
            console.log(playerScore, computerScore);
        }

        else if (playerSelection == "rock" && computerSelection == "scissors")
        {
            console.log(playerSelection,computerSelection);
            console.log("Player takes this round");
            playerScore ++;
            console.log(playerScore, computerScore);
        }

        else if (playerSelection == "paper" && computerSelection == "rock")
        {
            console.log(playerSelection,computerSelection);
            console.log("Player takes this round");
            playerScore ++;
            console.log(playerScore, computerScore);
        }

        else if (playerSelection == "scissors" && computerSelection == "paper")
        {
            console.log(playerSelection,computerSelection);
            console.log("Player takes this round");
            playerScore ++;
            console.log(playerScore, computerScore);
        }

        else 
        {
            console.log(playerSelection,computerSelection);
            console.log("Computer takes this round");
            computerScore ++;
            console.log(playerScore, computerScore);
        }
    }

    function game()
    {
        let display = document.getElementById("display");
        choice = playerChoice();
        round(choice);
        if (playerScore > computerScore)
        {
            console.log("Player wins!");
            display.textContent = "Player wins!"
        } 
        else if (playerScore == computerScore)
        {
            console.log("It's a tie");
            display.textContent = "It's a tie"
        }
        else
        {
            console.log("Computer wins...");
            display.textContent = "Computer wins..."
        }
    }

    game();
}