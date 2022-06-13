import { test, expect } from '@playwright/test'

test('password validation success', async ({ page }) => {
	await page.goto('http://127.0.0.1:8080')
	const passwordField = page.locator('input:below(:text("Lozinka"))')
	const btn = page.locator('button')
	const msg = page.locator('.message')
	await passwordField.fill('aBcD12')
	await btn.click()
	await expect(msg).toHaveText('Lozinka je valjana!')
	await expect(msg).toHaveCSS('color', 'rgb(0, 128, 0)')
})

test('password validation error', async ({ page }) => {
	await page.goto('http://127.0.0.1:8080')
	const passwordField = page.locator('input:below(:text("Lozinka"))')
	const btn = page.locator('button')
	const msg = page.locator('.message')
	await passwordField.fill('abc')
	await btn.click()
	await expect(msg).toHaveText('Lozinka nije valjana!')
	await expect(msg).toHaveCSS('color', 'rgb(255, 0, 0)')
})
