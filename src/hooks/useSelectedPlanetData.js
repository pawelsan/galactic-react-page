import { useAsyncValue } from 'react-router-dom'

export function useSelectedPlanetData(id) {
	const planets = useAsyncValue()
	const planet = planets.find((planet) => planet.name === id.replace('-', ' '))
	const redundantDataKeys = ['residents', 'films', 'created', 'edited', 'url']
	redundantDataKeys.forEach((key) => delete planet[key])
	return planet
}
