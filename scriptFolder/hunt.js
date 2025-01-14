/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/no-array-for-each */
/* eslint-disable unicorn/no-null */
/**
 * Finds the shortest snake in the shortest distance, to eat it
 * @param {number} myHead -The position of snakes head
 * @param {Array} opponents -An array with all the opponents on the board
 * @param {Array} isMoveSafe -An array containing all the moves that are safe for the snake to move to
 * @returns {boolean} The moves that are safe to be taken for hunting other snakes
 */
export default function hunt(myHead, opponents, isMoveSafe) {
	let shortestSnake = null

	let closestDistance = 9999

	opponents.forEach((opponent) => {
		const opponentHead = opponent.body[0]

		//manhatan for the distance
		const distance =
			Math.abs(opponentHead.x - myHead.x) + Math.abs(opponentHead.y - myHead.y)

		//checks if the enemy snake is smaller and closer to us
		if (
			opponent.body.length < gameState.you.body.length &&
			distance < closestDistance
		) {
			shortestSnake = opponent
			closestDistance = distance
		}
	})

	//the if statement finds the closest and smallest snke and eliminates it
	if (shortestSnake) {
		const opponentHead = shortestSnake.body[0]

		if (opponentHead.x > myHead.x) {
			isMoveSafe.right = true
		} else if (opponentHead.x < myHead.x) {
			isMoveSafe.left = true
		} else if (opponentHead.y > myHead.y) {
			isMoveSafe.down = true
		} else if (opponentHead.y < myHead.y) {
			isMoveSafe.up = true
		}
	}
}
