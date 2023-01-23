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

export function filterPlanetsOnInputChange(inputValue, planets) {
	//Get search suggestion list
	const suggestionValue = inputValue.trim().toUpperCase()
	const suggestionLength = suggestionValue.length
	const filteredPlanets = planets.filter(
		(planet) =>
			planet.name.toUpperCase().slice(0, suggestionLength) === suggestionValue
	)
	return filteredPlanets
}
