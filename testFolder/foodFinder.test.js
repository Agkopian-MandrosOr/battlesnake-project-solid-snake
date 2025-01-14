import heuristic from '../scriptFolder/foodFinder'

describe('avoidWalls', () => {
	test('Find the closest food, when head is at x=2 and y=3', () => {
		const myHead = { x: 3, y: 2 }
		const food = [
			{ x: 5, y: 4 },
			{ x: 1, y: 2 },
			{ x: 2, y: 7 },
		]
		const isMovePref = {
			up: false,
			down: false,
			left: false,
			right: false,
		}

		heuristic(myHead, food, isMovePref)

		expect(isMovePref).toEqual({
			up: false,
			down: false,
			left: true,
			right: false,
		})
	})

	test('Find the closest food, when head is at x=5 and y=3', () => {
		const myHead = { x: 5, y: 3 }
		const food = [
			{ x: 5, y: 4 },
			{ x: 1, y: 2 },
			{ x: 2, y: 7 },
		]
		const isMovePref = {
			up: false,
			down: false,
			left: false,
			right: false,
		}

		heuristic(myHead, food, isMovePref)

		expect(isMovePref).toEqual({
			up: true,
			down: false,
			left: false,
			right: false,
		})
	})

	test('Find the closest food, when head is at x=7 and y=4', () => {
		const myHead = { x: 7, y: 4 }
		const food = [
			{ x: 8, y: 4 },
			{ x: 1, y: 2 },
			{ x: 2, y: 2 },
		]
		const isMovePref = {
			up: false,
			down: false,
			left: false,
			right: false,
		}

		heuristic(myHead, food, isMovePref)

		expect(isMovePref).toEqual({
			up: false,
			down: false,
			left: false,
			right: true,
		})
	})

	test('Find the closest food, when head is at x=4 and y=8', () => {
		const myHead = { x: 4, y: 8 }
		const food = [
			{ x: 4, y: 7 },
			{ x: 1, y: 0 },
			{ x: 0, y: 1 },
		]
		const isMovePref = {
			up: false,
			down: false,
			left: false,
			right: false,
		}

		heuristic(myHead, food, isMovePref)

		expect(isMovePref).toEqual({
			up: false,
			down: true,
			left: false,
			right: false,
		})
	})
})
