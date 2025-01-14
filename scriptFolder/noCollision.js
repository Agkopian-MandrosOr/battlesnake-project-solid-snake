/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/no-for-loop */
/**
 * Checks that the snake doen't move to a position that has it's own body
 * @param {number} myHead -The position of snakes head
 * @param {Array} myBody -An array containing the position of each of the snakes body part
 * @param {Array} isMoveSafe -An array containing all the moves that are safe for the snake to take
 * @returns {boolean} The moves that are safe for the snake to take
 */
export default function noCollision(myHead, myBody, isMoveSafe) {
	for (let index = 0; index < myBody.length; index++) {
		if (myHead.x + 1 == myBody[index].x && myHead.y == myBody[index].y) {
			isMoveSafe.right = false
		}
		if (myHead.x - 1 == myBody[index].x && myHead.y == myBody[index].y) {
			isMoveSafe.left = false
		}
		if (myHead.y + 1 == myBody[index].y && myHead.x == myBody[index].x) {
			isMoveSafe.up = false
		}
		if (myHead.y - 1 == myBody[index].y && myHead.x == myBody[index].x) {
			isMoveSafe.down = false
		}
	}
}
