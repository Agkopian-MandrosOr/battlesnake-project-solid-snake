import noCollision from '../scriptFolder/noCollision'

describe('noCollision', () => {
	test('should update isMoveSafe correctly when head is at x+1=myBody and y=myBody', () => {
		const myHead = { x: 5, y: 3 }
		const myBody = [
			{ x: 6, y: 3 },
			{ x: 7, y: 3 },
		]
		const isMoveSafe = { left: true, right: true, up: true, down: true }

		noCollision(myHead, myBody, isMoveSafe)

		expect(isMoveSafe.left).toBe(true)
		expect(isMoveSafe.right).toBe(false)
		expect(isMoveSafe.up).toBe(true)
		expect(isMoveSafe.down).toBe(true)
	})

	test('should update isMoveSafe correctly when head is at x-1=myBody and y=myBody', () => {
		const myHead = { x: 5, y: 7 }
		const myBody = [
			{ x: 3, y: 7 },
			{ x: 4, y: 7 },
		]
		const isMoveSafe = { left: true, right: true, up: true, down: true }

		noCollision(myHead, myBody, isMoveSafe)

		expect(isMoveSafe.left).toBe(false)
		expect(isMoveSafe.right).toBe(true)
		expect(isMoveSafe.up).toBe(true)
		expect(isMoveSafe.down).toBe(true)
	})

	test('should update isMoveSafe correctly when head is at y+1=myBody and x=myBody', () => {
		const myHead = { x: 4, y: 6 }
		const myBody = [
			{ x: 4, y: 7 },
			{ x: 4, y: 8 },
		]
		const isMoveSafe = { left: true, right: true, up: true, down: true }

		noCollision(myHead, myBody, isMoveSafe)

		expect(isMoveSafe.left).toBe(true)
		expect(isMoveSafe.right).toBe(true)
		expect(isMoveSafe.up).toBe(false)
		expect(isMoveSafe.down).toBe(true)
	})

	test('should update isMoveSafe correctly when head is at y-1=myBody and x=myBody', () => {
		const myHead = { x: 2, y: 5 }
		const myBody = [
			{ x: 2, y: 4 },
			{ x: 2, y: 3 },
		]
		const isMoveSafe = { left: true, right: true, up: true, down: true }

		noCollision(myHead, myBody, isMoveSafe)

		expect(isMoveSafe.left).toBe(true)
		expect(isMoveSafe.right).toBe(true)
		expect(isMoveSafe.up).toBe(true)
		expect(isMoveSafe.down).toBe(false)
	})
})
