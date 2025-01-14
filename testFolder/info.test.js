import info from '../scriptFolder/info'

describe('info', () => {
	test('info displays information about the author of the snake and controlls the customization of the snake', () => {
		const { apiversion, author, color, head, tail } = info()

		expect(apiversion).toBe('1')
		expect(author).toBe('Metal_Gear')
		expect(color).toBe('#00ccff')
		expect(head).toBe('all-seeing')
		expect(tail).toBe('rocket')
	})
})
