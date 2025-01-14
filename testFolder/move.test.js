import move from '../scriptFolder/move'
import avoidWalls from '../scriptFolder/avoidWalls'
import noCollision from '../scriptFolder/noCollision'
import heuristic from '../scriptFolder/foodFinder'
import opponentNoCollision from '../scriptFolder/opponentNoCollision'
import hunt from '../scriptFolder/hunt'

//Creating mock version of the other imported functions
jest.mock('../scriptFolder/avoidWalls')
jest.mock('../scriptFolder/noCollision')
jest.mock('../scriptFolder/foodFinder')
jest.mock('../scriptFolder/opponentNoCollision')
jest.mock('../scriptFolder/hunt')

describe('move', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})
	test('move function is used to move the snake down', () => {
		const gameState = {
			you: {
				body: [
					{ x: 3, y: 4 },
					{ x: 3, y: 5 },
					{ x: 4, y: 6 },
				],
			},
			opponents: {
				enemy1: [
					{ x: 4, y: 7 },
					{ x: 5, y: 7 },
				],
				enemy2: [
					{ x: 8, y: 10 },
					{ x: 7, y: 10 },
				],
			},
			board: {
				width: 11,
				height: 11,
				food: [
					{ x: 7, y: 7 },
					{ x: 1, y: 3 },
				],
			},
		}

		avoidWalls.mockImplementationOnce((head, width, height, moves) => {
			moves.left = false
		})
		noCollision.mockImplementationOnce((head, body, moves) => {
			moves.down = true
		})
		opponentNoCollision.mockImplementationOnce((head, opponents, moves) => {
			moves.right = false
		})
		heuristic.mockImplementationOnce((head, food, moves) => {
			moves.up = false
		})
		hunt.mockImplementationOnce((head, opponents, moves) => {
			moves.left = false
		})

		const safeMove = 'down'

		const result = move(gameState)

		expect(avoidWalls).toHaveBeenCalledTimes(1)
		expect(noCollision).toHaveBeenCalledTimes(1)
		expect(opponentNoCollision).toHaveBeenCalledTimes(1)
		expect(heuristic).toHaveBeenCalledTimes(1)
		expect(result.move).toBe(safeMove)
	})

	test('move function is used to move the snake up', () => {
		const gameState = {
			you: {
				body: [
					{ x: 0, y: 1 },
					{ x: 0, y: 0 },
				],
			},
			opponents: {
				enemy1: [
					{ x: 1, y: 0 },
					{ x: 1, y: 1 },
				],
				enemy2: [
					{ x: 8, y: 10 },
					{ x: 7, y: 10 },
				],
			},
			board: {
				width: 11,
				height: 11,
				food: [
					{ x: 7, y: 7 },
					{ x: 1, y: 3 },
				],
			},
		}

		avoidWalls.mockImplementationOnce((head, width, height, moves) => {
			moves.left = false
		})
		noCollision.mockImplementationOnce((head, body, moves) => {
			moves.down = false
		})
		opponentNoCollision.mockImplementationOnce((head, opponents, moves) => {
			moves.right = false
		})
		heuristic.mockImplementationOnce((head, food, moves) => {
			moves.up = true
		})
		hunt.mockImplementationOnce((head, opponents, moves) => {
			moves.left = false
		})

		const safeMove = 'up'

		const result = move(gameState)

		expect(avoidWalls).toHaveBeenCalledTimes(1)
		expect(noCollision).toHaveBeenCalledTimes(1)
		expect(opponentNoCollision).toHaveBeenCalledTimes(1)
		expect(heuristic).toHaveBeenCalledTimes(1)
		expect(result.move).toBe(safeMove)
	})
	test('move function is used to move the snake right', () => {
		const gameState = {
			you: {
				body: [
					{ x: 0, y: 10 },
					{ x: 0, y: 9 },
				],
			},
			opponents: {
				enemy1: [
					{ x: 1, y: 9 },
					{ x: 1, y: 8 },
				],
				enemy2: [
					{ x: 8, y: 10 },
					{ x: 7, y: 10 },
				],
			},
			board: {
				width: 11,
				height: 11,
				food: [
					{ x: 1, y: 1 },
					{ x: 4, y: 3 },
				],
			},
		}

		avoidWalls.mockImplementationOnce((head, width, height, moves) => {
			moves.right = true
		})
		noCollision.mockImplementationOnce((head, body, moves) => {
			moves.down = false
		})
		opponentNoCollision.mockImplementationOnce((head, opponents, moves) => {
			moves.left = false
		})
		heuristic.mockImplementationOnce((head, food, moves) => {
			moves.up = false
		})

		const safeMove = 'right'

		const result = move(gameState)

		expect(avoidWalls).toHaveBeenCalledTimes(1)
		expect(noCollision).toHaveBeenCalledTimes(1)
		expect(opponentNoCollision).toHaveBeenCalledTimes(1)
		expect(heuristic).toHaveBeenCalledTimes(1)
		expect(result.move).toBe(safeMove)
	})
	test('move function is used to move the snake left', () => {
		const gameState = {
			you: {
				body: [
					{ x: 10, y: 10 },
					{ x: 10, y: 9 },
				],
			},
			opponents: {
				enemy1: [
					{ x: 9, y: 9 },
					{ x: 9, y: 8 },
				],
				enemy2: [
					{ x: 8, y: 10 },
					{ x: 7, y: 10 },
				],
			},
			board: {
				width: 11,
				height: 11,
				food: [
					{ x: 4, y: 5 },
					{ x: 1, y: 3 },
				],
			},
		}

		avoidWalls.mockImplementationOnce((head, width, height, moves) => {
			moves.left = true
		})
		noCollision.mockImplementationOnce((head, body, moves) => {
			moves.down = false
		})
		opponentNoCollision.mockImplementationOnce((head, opponents, moves) => {
			moves.right = false
		})
		heuristic.mockImplementationOnce((head, food, moves) => {
			moves.up = false
		})
		hunt.mockImplementationOnce((head, opponents, moves) => {
			moves.up = false
		})

		const safeMove = 'left'

		const result = move(gameState)

		expect(avoidWalls).toHaveBeenCalledTimes(1)
		expect(noCollision).toHaveBeenCalledTimes(1)
		expect(opponentNoCollision).toHaveBeenCalledTimes(1)
		expect(heuristic).toHaveBeenCalledTimes(1)
		expect(result.move).toBe(safeMove)
	})
})
