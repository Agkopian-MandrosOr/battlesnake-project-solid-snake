import avoidWalls from '../scriptFolder/avoidWalls'

describe('avoidWalls', () => {
	test('isMoveSafe variable gets a correct value stored, when head is at x=0', () => {
		const myHead = { x: 0, y: 3 }
		const boardWidth = 11
		const boardHeight = 11
		const isMoveSafe = { left: true, right: true, up: true, down: true }

		avoidWalls(myHead, boardWidth, boardHeight, isMoveSafe)

		expect(isMoveSafe.left).toBe(false)
		expect(isMoveSafe.right).toBe(true)
		expect(isMoveSafe.up).toBe(true)
		expect(isMoveSafe.down).toBe(true)
	})

	test('isMoveSafe variable gets a correct value stored, when head is at y=0', () => {
		const myHead = { x: 5, y: 0 }
		const boardWidth = 11
		const boardHeight = 11
		const isMoveSafe = { left: true, right: true, up: true, down: true }

		avoidWalls(myHead, boardWidth, boardHeight, isMoveSafe)

		expect(isMoveSafe.left).toBe(true)
		expect(isMoveSafe.right).toBe(true)
		expect(isMoveSafe.up).toBe(true)
		expect(isMoveSafe.down).toBe(false)
	})

	test('isMoveSafe variable gets a correct value stored, when head is at x=10', () => {
		const myHead = { x: 10, y: 6 }
		const boardWidth = 11
		const boardHeight = 11
		const isMoveSafe = { left: true, right: true, up: true, down: true }

		avoidWalls(myHead, boardWidth, boardHeight, isMoveSafe)

		expect(isMoveSafe.left).toBe(true)
		expect(isMoveSafe.right).toBe(false)
		expect(isMoveSafe.up).toBe(true)
		expect(isMoveSafe.down).toBe(true)
	})

	test('isMoveSafe variable gets a correct value stored, when head is at y=10', () => {
		const myHead = { x: 2, y: 10 }
		const boardWidth = 11
		const boardHeight = 11
		const isMoveSafe = { left: true, right: true, up: true, down: true }

		avoidWalls(myHead, boardWidth, boardHeight, isMoveSafe)

		expect(isMoveSafe.left).toBe(true)
		expect(isMoveSafe.right).toBe(true)
		expect(isMoveSafe.up).toBe(false)
		expect(isMoveSafe.down).toBe(true)
	})

	test('isMoveSafe variable gets a correct value stored, when head is at x=10 and y=10', () => {
		const myHead = { x: 10, y: 10 }
		const boardWidth = 11
		const boardHeight = 11
		const isMoveSafe = { left: true, right: true, up: true, down: true }

		avoidWalls(myHead, boardWidth, boardHeight, isMoveSafe)

		expect(isMoveSafe.left).toBe(true)
		expect(isMoveSafe.right).toBe(false)
		expect(isMoveSafe.up).toBe(false)
		expect(isMoveSafe.down).toBe(true)
	})

	test('isMoveSafe variable gets a correct value stored, when head is at x=0 and y=0', () => {
		const myHead = { x: 0, y: 0 }
		const boardWidth = 11
		const boardHeight = 11
		const isMoveSafe = { left: true, right: true, up: true, down: true }

		avoidWalls(myHead, boardWidth, boardHeight, isMoveSafe)

		expect(isMoveSafe.left).toBe(false)
		expect(isMoveSafe.right).toBe(true)
		expect(isMoveSafe.up).toBe(true)
		expect(isMoveSafe.down).toBe(false)
	})
})
