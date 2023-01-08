import { useRouteLoaderData } from 'react-router-dom'

export function useSelectedPlanetData(id) {
	const planets = useRouteLoaderData('root')
	return planets.find((planet) => planet.name === id)
}
