export function isPasswordValid(password) {
	if (!/[A-Z]/.test(password)) return false
	if (!/[a-z]/.test(password)) return false
	if (!/[0-9]/.test(password)) return false
	if (password.length < 6) return false
	return true
}