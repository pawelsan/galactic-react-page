import { getAllPlanets } from '../api/api'
import { defer } from 'react-router-dom'

function transformPlanetData(planetData) {
	return planetData
		.filter((planet) => planet.name !== 'unknown')
		.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
}

async function getPlanetData() {
	if (localStorage.getItem('SWAPI_DATA') === null) {
		const planetData = await getAllPlanets()
		const transformedPlanetData = transformPlanetData(planetData)
		localStorage.setItem('SWAPI_DATA', JSON.stringify(transformedPlanetData))
		return transformedPlanetData
	}
	return JSON.parse(localStorage.getItem('SWAPI_DATA'))
}

export async function loadPlanetData() {
	const planetDataPromise = getPlanetData()

	return defer({
		planetData:
			localStorage.getItem('SWAPI_DATA') === null
				? planetDataPromise
				: await planetDataPromise,
	})
}
