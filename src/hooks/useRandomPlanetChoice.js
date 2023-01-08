import { useState, useEffect } from 'react'
import { getRandomNumbers } from '../helpers/randomNumbers'

export function useRandomPlanetChoice(planets) {
	const [pickedPlanets, setPickedPlanets] = useState([])
	const [pickedIndicesSet, setPickedIndicesSet] = useState(new Set())

	useEffect(() => {
		if (pickedIndicesSet.size === 0) {
			setPickedIndicesSet(getRandomNumbers(6, planets.length - 1))
		}
		const tempArray = []
		for (const index of pickedIndicesSet) {
			tempArray.push(planets[index])
		}
		setPickedPlanets(tempArray)
	}, [pickedIndicesSet, planets])

	return pickedPlanets
}
