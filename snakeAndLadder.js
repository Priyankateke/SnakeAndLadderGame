//Welcome Message
console.log("Welcome To Snake And Ladder")

//constants
const NO_PLAY=0
const LADDER=1
const SNAKE=2
const STARTING_POSITION=0
const WINNING_POSITION=100

//variables
let dieValue
let playerPosition=0
let diceRoll = 0

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

    //Count dice rolls
    diceRoll++

	//Move player Position according to playingOptions
	switch(playingOptions) {
        case NO_PLAY: 
            playerPosition = playerPosition
            break;
        case LADDER: 
            playerPosition = playerPosition + dieValue
            break;
        case SNAKE:
            playerPosition = playerPosition - dieValue
            break;
    }
    resetingWrongPosition()

    //store in dictionary : dice count and player position
    gameRecords['DiceRoll : '+diceRoll] = playerPosition
}

/**
 * play till get winning position 100
 */
function playUntilWin()
{
    while( playerPosition != WINNING_POSITION ) {
        setPlayerMoves()  
    }  
}

/**
 * Ensure player position between 0 to 100
 */
function resetingWrongPosition()
{
	if( playerPosition < STARTING_POSITION )
        playerPosition = STARTING_POSITION
    else if( playerPosition > WINNING_POSITION ) 
        playerPosition = playerPosition - dieValue
}

//Start game
playUntilWin()
