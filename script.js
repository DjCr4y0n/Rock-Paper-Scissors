function getComputerChoice()
{
    let arr = ["rock", "paper", "scissors"];
    return arr[(Math.floor(Math.random() * arr.length))];
}


let playerScore = 0;
let computerScore = 0;


function game()
{
    while (playerScore != 5 && computerScore != 5)
    {
        let playerSelection = prompt("Gimme ur choice youngling");
        playerSelection.toLowerCase();
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
}


game();

if (playerScore > computerScore)
{
    console.log("Player wins!");
}
else
{
    console.log("Computer wins...");
}