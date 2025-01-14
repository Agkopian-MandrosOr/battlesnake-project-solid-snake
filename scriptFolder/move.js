/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/no-for-loop */
import avoidWalls from './avoidWalls.js'
import noCollision from './noCollision.js'
import opponentNoCollision from './opponentNoCollision.js'
import heuristic from './foodFinder.js'
import hunt from './hunt.js'

export default function move(gameState) {
	let isMoveSafe = {
		up: true,
		down: true,
		left: true,
		right: true,
	}

	let isMovePref = {
		up: false,
		down: false,
		left: false,
		right: false,
	} // preffered moves to eat food

	// We've included code to prevent your Battlesnake from moving backwards
	const myHead = gameState.you.body[0]
	const myNeck = gameState.you.body[1]

	if (myNeck.x < myHead.x) {
		// Neck is left of head, don't move left
		isMoveSafe.left = false
	} else if (myNeck.x > myHead.x) {
		// Neck is right of head, don't move right
		isMoveSafe.right = false
	} else if (myNeck.y < myHead.y) {
		// Neck is below head, don't move down
		isMoveSafe.down = false
	} else if (myNeck.y > myHead.y) {
		// Neck is above head, don't move up
		isMoveSafe.up = false
	}

	// Food Finder
	// TODO: Step 4 - Move towards food instead of random, to regain health and survive longer

	const food = gameState.board.food

	heuristic(myHead, food, isMovePref)

	//TODO: Step 5 - Eliminate the shortest snake
	hunt(myHead, opponents, isMoveSafe)

	// TODO: Step 1 - Prevent your Battlesnake from moving out of bounds
	const boardWidth = gameState.board.width
	const boardHeight = gameState.board.height

	avoidWalls(myHead, boardWidth, boardHeight, isMoveSafe)

	// TODO: Step 2 - Prevent your Battlesnake from colliding with itself
	const myBody = gameState.you.body

	noCollision(myHead, myBody, isMoveSafe)

	// TODO: Step 3 - Prevent your Battlesnake from colliding with other Battlesnakes
	const opponents = gameState.board.snakes

	opponentNoCollision(myHead, opponents, isMoveSafe)

	// Are there any safe moves left?
	const safeMoves = Object.keys(isMoveSafe).filter((key) => isMoveSafe[key])

	const prefMoves = Object.keys(isMovePref).filter((key) => isMovePref[key])

	if (safeMoves.length === 0) {
		console.log(`MOVE ${gameState.turn}: No safe moves detected! Moving down`)
		return { move: 'down' }
	}

	let nextMove = 'none'

	for (let index = 0; index < prefMoves.length; index++) {
		for (let index_ = 0; index_ < safeMoves.length; index_++) {
			if (prefMoves[index] === safeMoves[index_]) {
				nextMove = prefMoves[index]
			}
		}
	}

	if (nextMove === 'none') {
		nextMove = safeMoves[Math.floor(Math.random() * safeMoves.length)] // Choose a random move from the safe moves
	}

	console.log('Pref Move:', prefMoves)
	console.log('Safe Move:', safeMoves)

	//Flood fill movement
	// floodFill(myHead, myBody, boardWidth, boardHeight, food, opponents, isMovePref);

	console.log(`MOVE ${gameState.turn}: ${nextMove}`)
	return { move: nextMove }
}
