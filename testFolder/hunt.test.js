import hunt from '../scriptFolder/hunt'

describe('hunt', () => {
	test('hunt finds the smallest snake in the shortest distance and eliminates it targeting its head at x=4 and y=5', () => {
		const myHead = { x: 4, y: 5 }

		const isMoveSafe = { left: false, right: false, up: false, down: false }

		const opponents = [
			{
				body: [{ x: 4, y: 4 }],
			},
		]

		hunt(myHead, opponents, isMoveSafe)

		expect(isMoveSafe.left).toBe(false)
		expect(isMoveSafe.right).toBe(false)
		expect(isMoveSafe.up).toBe(false)
		expect(isMoveSafe.down).toBe(true)
	})
})
