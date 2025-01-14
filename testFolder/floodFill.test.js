import floodFill from '../scriptFolder/floodFill'

describe('floodFill', () => {
	test('floodFill ensures that the head of the snake does not move to a position that can lead to a loss, in the close future', () => {
		const myHead = { x: 3, y: 2 }
		const newValue = 2

		const initialBoard = [
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
			[1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
			[1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
			[1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
			[1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
			[1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
			[1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
			[1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
			[1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
		]

		const finalBoard = [
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
			[1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
			[1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
			[1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
			[1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
			[1, 1, 1, 1, 1, 2, 1, 0, 0, 1, 1],
			[1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1],
			[1, 2, 2, 2, 2, 2, 1, 1, 0, 1, 1],
			[1, 2, 2, 2, 2, 1, 1, 1, 0, 1, 1],
			[1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1],
		]

		floodFill(myHead, initialBoard, finalBoard, newValue)

		expect(initialBoard).toBe(finalBoard)
	})
})
