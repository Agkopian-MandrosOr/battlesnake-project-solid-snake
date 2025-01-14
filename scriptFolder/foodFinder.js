/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/no-for-loop */
/* eslint-disable unicorn/numeric-separators-style */
/**
 * Finds the closest food for the snake to eat
 * @param {number} myHead -The position of snakes head
 * @param {Array} food -An array with all the food pieces on the board
 * @param {Array} isMovePref -An array containing all the moves that are preffered for the task of this function
 * @returns {boolean} The moves that are preffered to be taken for hunting food
 */
export default function heuristic(myHead, food, isMovePref) {
	let shortestDistance = 99999
	let d1
	let d2
	let shortestFood

	console.log('Head:', myHead)

	for (let index = 0; index < food.length; index++) {
		console.log('Food:', food[index])

		d1 = Math.abs(food[index].x - myHead.x)
		d2 = Math.abs(food[index].y - myHead.y)

		let temporaryDistance = d1 + d2

		if (temporaryDistance < shortestDistance) {
			shortestDistance = temporaryDistance
			shortestFood = food[index]
		}
	}

	console.log('Shortest Food:', shortestFood)

	if (myHead.x < shortestFood.x) {
		isMovePref.right = true
	}
	if (myHead.y < shortestFood.y) {
		isMovePref.up = true
	}
	if (myHead.x > shortestFood.x) {
		isMovePref.left = true
	}
	if (myHead.y > shortestFood.y) {
		isMovePref.down = true
	}
} // This function finds where the shortest food node is and makes the battlesnake go towards it to eat it
