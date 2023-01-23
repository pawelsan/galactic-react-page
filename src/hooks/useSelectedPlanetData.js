import { useAsyncValue } from 'react-router-dom'

export function useSelectedPlanetData(id) {
	const planets = useAsyncValue()
	const selectedPlanetIndex = planets.findIndex(
		(planet) => planet.name === id.replace('-', ' ')
	)
	const planet = planets[selectedPlanetIndex]
	const redundantDataKeys = ['residents', 'films', 'created', 'edited', 'url']
	redundantDataKeys.forEach((key) => delete planet[key])
	for (const [key, value] of Object.entries(planet)) {
		if (value === 'unknown') delete planet[key]
	}

	if (planet.diameter)
		planet.total_surface = Math.floor(4 * Math.PI * (planet.diameter / 2) ** 2)
	if (planet.diameter && planet.diameter !== '0' && planet.population) {
		planet.population_density = (
			planet.population / Math.floor(4 * Math.PI * (planet.diameter / 2) ** 2)
		).toFixed(0)
	}

	const prevPlanetId =
		selectedPlanetIndex - 1 < 0
			? null
			: planets[selectedPlanetIndex - 1].name.replace(' ', '-')
	const nextPlanetId =
		selectedPlanetIndex + 1 === planets.length
			? null
			: planets[selectedPlanetIndex + 1].name.replace(' ', '-')

	return [planet, prevPlanetId, nextPlanetId]
}
