import { isPasswordValid } from './api.js'
import { test, expect } from 'vitest'

test('isPasswordValid satisfies conditions', () => {
	expect(isPasswordValid('aB1')).toBe(false)
	expect(isPasswordValid('ab1234')).toBe(false)
	expect(isPasswordValid('AB1234')).toBe(false)
	expect(isPasswordValid('aBcDEf')).toBe(false)
	expect(isPasswordValid('aBcDEf1')).toBe(true)
})