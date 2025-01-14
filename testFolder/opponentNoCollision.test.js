import opponentNoCollision from '../scriptFolder/opponentNoCollision'

describe('opponentNoCollision', () => {
	test('should update isMoveSafe correctly when head is at x+1=enemyBody and y=enemyBody', () => {
		const myHead = { x: 4, y: 3 }
		const opponents = [
			{
				body: [
					{ x: 4, y: 3 },
					{ x: 5, y: 3 },
				],
			},
		]
		const isMoveSafe = { left: true, right: true, up: true, down: true }

		opponentNoCollision(myHead, opponents, isMoveSafe)

		expect(isMoveSafe.left).toBe(true)
		expect(isMoveSafe.right).toBe(false)
		expect(isMoveSafe.up).toBe(true)
		expect(isMoveSafe.down).toBe(true)
	})

	test('should update isMoveSafe correctly when head is at x-1=enemyBody and y=enemyBody', () => {
		const myHead = { x: 6, y: 7 }
		const opponents = [
			{
				body: [
					{ x: 5, y: 7 },
					{ x: 4, y: 7 },
				],
			},
		]
		const isMoveSafe = { left: true, right: true, up: true, down: true }

		opponentNoCollision(myHead, opponents, isMoveSafe)

		expect(isMoveSafe.left).toBe(false)
		expect(isMoveSafe.right).toBe(true)
		expect(isMoveSafe.up).toBe(true)
		expect(isMoveSafe.down).toBe(true)
	})

	test('should update isMoveSafe correctly when head is at y+1=enemyBody and x=enemyBody', () => {
		const myHead = { x: 4, y: 8 }
		const opponents = [
			{
				body: [
					{ x: 4, y: 9 },
					{ x: 4, y: 10 },
				],
			},
		]
		const isMoveSafe = { left: true, right: true, up: true, down: true }

		opponentNoCollision(myHead, opponents, isMoveSafe)

		expect(isMoveSafe.left).toBe(true)
		expect(isMoveSafe.right).toBe(true)
		expect(isMoveSafe.up).toBe(false)
		expect(isMoveSafe.down).toBe(true)
	})

	test('should update isMoveSafe correctly when head is at y-1=enemyBody and x=enemyBody', () => {
		const myHead = { x: 2, y: 4 }
		const opponents = [
			{
				body: [
					{ x: 2, y: 3 },
					{ x: 2, y: 2 },
				],
			},
		]
		const isMoveSafe = { left: true, right: true, up: true, down: true }

		opponentNoCollision(myHead, opponents, isMoveSafe)

		expect(isMoveSafe.left).toBe(true)
		expect(isMoveSafe.right).toBe(true)
		expect(isMoveSafe.up).toBe(true)
		expect(isMoveSafe.down).toBe(false)
	})
})
