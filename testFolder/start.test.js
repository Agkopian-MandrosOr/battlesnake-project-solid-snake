import start from '../scriptFolder/start'

describe('start', () => {
	test('start should write in the console log "GAME START"', () => {
		const consoleTest = jest.spyOn(console, 'log')
		start()
		expect(consoleTest).toHaveBeenCalledWith('GAME START')
		consoleTest.mockRestore()
	})
})
