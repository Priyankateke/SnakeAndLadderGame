//Welcome Message
console.log("Welcome To Snake And Ladder")

//acess file :snakeAndLadder
const SnakeAndLadder = require('./snakeAndLadder')

//object of class SnakeAndLadder
const snakeAndLadder = new SnakeAndLadder()

//start game
snakeAndLadder.playUntilWin()