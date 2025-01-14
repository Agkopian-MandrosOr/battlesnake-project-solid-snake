/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/no-for-loop */
/* eslint-disable sonarjs/cognitive-complexity */
/**
 * Checks that the snake doen't move to a position that has any part of an opoonent's body
 * @param {number} myHead -The position of snakes head
 * @param {Array} opponents -An array with the positions of all the enemy snakes
 * @param {Array} isMoveSafe -An array containing all the moves that are safe for the snake to take
 * @returns {boolean} The moves that are safe for the snake to take
 */

export default function opponentNoCollision(myHead, opponents, isMoveSafe) {
	for (let index = 0; index < opponents.length; index++) {
		const enemy = opponents[index]
		for (let index = 0; index < enemy.body.length; index++) {
			if (
				myHead.x + 1 == enemy.body[index].x &&
				myHead.y == enemy.body[index].y
			) {
				isMoveSafe.right = false
			}
			if (
				myHead.x - 1 == enemy.body[index].x &&
				myHead.y == enemy.body[index].y
			) {
				isMoveSafe.left = false
			}
			if (
				myHead.y + 1 == enemy.body[index].y &&
				myHead.x == enemy.body[index].x
			) {
				isMoveSafe.up = false
			}
			if (
				myHead.y - 1 == enemy.body[index].y &&
				myHead.x == enemy.body[index].x
			) {
				isMoveSafe.down = false
			}
		}
	}
}
