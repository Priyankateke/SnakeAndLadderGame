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

class SnakeAndLadder {
    /**
     * Function to set playerPosition 
     * according to playing Options like NO_Play or Snake or Ladder
     */
    setPlayerMoves() {
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

            gameRecords['Player : '+player] = new Array();
            gameRecords['Player : '+player].push(playerPosition)
            gameRecords['Player : '+player].push(diceRoll)
        }
        
        /**
         * play till get winning position 100
         */
        playUntilWin() {
            while( playerPosition != WINNING_POSITION ) {
                this.switchPlayer()
            }
            console.log("Player : " + player + " won")
            console.log("Winning Position , number of times dice rolled")
            console.log(gameRecords['Player : '+player])
        }
        
        /**
         * switch Player
         */
        switchPlayer() {
            if ( player == 1 ) {
                player = 2
                playerPosition = playerTwoPosition
                this.setPlayerMoves()
                playerTwoPosition = playerPosition
            }
            else {
                player = 1
                diceRoll++
                playerPosition = playerOnePosition
                this.setPlayerMoves()
                playerOnePosition = playerPosition
            }
        }
}

//export class SnakeAndLadder
module.exports = SnakeAndLadder