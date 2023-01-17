import { useAsyncValue } from 'react-router-dom'

export function useSelectedPlanetData(id) {
	const planets = useAsyncValue()
	return planets.find((planet) => planet.name === id.replace('-', ' '))
}
