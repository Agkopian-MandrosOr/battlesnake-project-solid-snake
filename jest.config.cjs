module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['**/*.js'],
	coverageReporters: ['lcov', 'text'],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/coverage/',
		'/out/',
		'index.js',
		'server.js',
	],
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},
}
