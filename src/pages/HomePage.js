import { useRouteLoaderData } from 'react-router-dom'
import { useRandomPlanetChoice } from '../hooks/useRandomPlanetChoice'

function HomePage() {
	const planets = useRouteLoaderData('root')
	const pickedPlanets = useRandomPlanetChoice(planets)

	return (
		<>
			<h1>HomePage</h1>
			<ul>
				{pickedPlanets.map((planet, index) => (
					<li key={index}>{planet.name}</li>
				))}
			</ul>
		</>
	)
}

export default HomePage
