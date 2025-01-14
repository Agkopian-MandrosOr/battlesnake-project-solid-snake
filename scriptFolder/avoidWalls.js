/**
 * Checks if the snake is next to a wall and avoids it
 * @param {number} myHead -The position of snakes head
 * @param {number} boardWidth -The total width of the current board
 * @param {number} boardHeight -The total height of the current board
 * @param {Array} isMoveSafe -An array containing all the moves that are safe for the snake to take
 * @returns {boolean} The moves that are safe for the snake to take
 */
export default function avoidWalls(
	myHead,
	boardWidth,
	boardHeight,
	isMoveSafe
) {
	if (myHead.x == 0) {
		isMoveSafe.left = false
	}
	if (myHead.y == 0) {
		isMoveSafe.down = false
	}
	if (myHead.x == boardWidth - 1) {
		isMoveSafe.right = false
	}
	if (myHead.y == boardHeight - 1) {
		isMoveSafe.up = false
	}
}
