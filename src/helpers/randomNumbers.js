export function getRandomNumbers(amount, scope) {
	const set = new Set()
	while (set.size < amount) {
		set.add(Math.floor(Math.random() * scope))
	}
	return set
}
