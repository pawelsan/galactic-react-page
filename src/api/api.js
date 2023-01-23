import { URL } from '../constants/constants'

async function getPlanets(url, apiPageId) {
	const response = await fetch(url + apiPageId)
	if (!response.ok) {
		throw {
			message: `Failed to fetch planets from list #${apiPageId}.`,
			status: 500,
		}
	}
	return response.json()
}

export async function getAllPlanets() {
	let allPlanetArray = []
	try {
		// All planets fetched at once as there are not many of them
		for (let i = 1; i < 7; i++) {
			const response = await getPlanets(URL, i)
			const { results } = response
			allPlanetArray.push(...results)
		}
	} catch (error) {
		return error.message
	}
	return allPlanetArray
}
