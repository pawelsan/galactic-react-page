import { useAsyncValue } from 'react-router'
import { useRandomPlanetChoice } from '../hooks/useRandomPlanetChoice'

function RandomPlanetChoice() {
	const planets = useAsyncValue()
	const randomPlanetChoice = useRandomPlanetChoice(planets)
	return (
		<ul>
			{randomPlanetChoice.map((planet, index) => (
				<li key={index}>{planet.name}</li>
			))}
		</ul>
	)
}

export default RandomPlanetChoice
