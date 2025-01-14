import end from '../scriptFolder/end'

describe('end', () => {
	test('isMoveSafe variable gets a correct value stored, when head is at x=0', () => {
		const consoleTest = jest.spyOn(console, 'log')
		end()
		expect(consoleTest).toHaveBeenCalledWith('GAME OVER')
		consoleTest.mockRestore()
	})
})
