//Welcome Message
console.log("Welcome To Snake And Ladder")

//constants
const NO_PLAY = 0
const LADDER = 1
const SNAKE = 2
const STARTING_POSITION = 0
const WINNING_POSITION = 100

//variables
let dieValue
let diceRoll = 0
let player = 2
let playerPosition = STARTING_POSITION
playerOnePosition = STARTING_POSITION
playerTwoPosition = STARTING_POSITION

//dictionary
var gameRecords = {};

/**
 *Function to set playerPosition according to playing Options like NO_Play or Snake or Ladder 
 */
function setPlayerMoves()
{
    //die value between 1 to 6
    dieValue = Math.floor(Math.random()*6 + 1)
    //Playing Options
    let playingOptions = Math.floor(Math.random()*3)

	//Move player Position according to playingOptions
	switch(playingOptions) {
        case NO_PLAY: 
            playerPosition = playerPosition
            break;
        case LADDER: 
            playerPosition = playerPosition + dieValue
            //Ensures playerPosition is not greater than winning position
			if( playerPosition > WINNING_POSITION ) {
				playerPosition -= dieValue
            }
            break;
        case SNAKE:
            playerPosition = playerPosition - dieValue
            //Ensures playerPosition is not less than starting position
			if( playerPosition < STARTING_POSITION ) {
				playerPosition = STARTING_POSITION
            }
            break;
    }
    //store in dictionary : player : player position and dice Count
    gameRecords['Player : '+player] = playerPosition, diceRoll
}

/**
 * play till get winning position 100
 */
function playUntilWin()
{
    while( playerPosition != WINNING_POSITION ) {
       switchPlayer() 
    }  
    console.log("Player : " + player + " won")
}

/**
 * switch Player
 */
function switchPlayer()
{
	if ( player == 1 ) {
		player = 2
		playerPosition = playerTwoPosition
		setPlayerMoves()
        playerTwoPosition = playerPosition
    }
	else {
		player = 1
		diceRoll++
		playerPosition = playerOnePosition
		setPlayerMoves()
		playerOnePosition = playerPosition
    }
}

//Start game
playUntilWin()
