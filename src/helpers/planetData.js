import { getAllPlanets } from '../api/api'

function transformPlanetData(planetData) {
	return planetData
		.filter((planet) => planet.name !== 'unknown')
		.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
}

export async function loadPlanetData() {
	if (localStorage.getItem('SWAPI_DATA') === null) {
		const planetData = await getAllPlanets()
		const transformedPlanetData = transformPlanetData(planetData)
		localStorage.setItem('SWAPI_DATA', JSON.stringify(transformedPlanetData))
		return transformedPlanetData
	}
	return JSON.parse(localStorage.getItem('SWAPI_DATA'))
}
