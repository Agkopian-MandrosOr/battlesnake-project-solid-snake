module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	plugins: ['sonarjs', 'unicorn', 'eslint-comments', 'promise', 'jest'],
	extends: [
		'eslint:recommended',
		'eslint-config-prettier',
		'plugin:sonarjs/recommended',
		'plugin:unicorn/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:promise/recommended',
		'prettier',
		'plugin:jest/recommended',
		'plugin:prettier/recommended', // this goes last
	],
	overrides: [],
	rules: {
		'eslint-comments/no-duplicate-disable': 'warn',
		'eslint-comments/no-unlimited-disable': 'warn',
		'prettier/prettier': 'error',
		endOfLine: 'off',
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			modules: true,
		},
	},
}
