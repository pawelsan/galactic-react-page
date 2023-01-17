import { Link, useAsyncValue } from 'react-router-dom'

function PlanetsList() {
	const planets = useAsyncValue()

	return (
		<ul>
			{planets.map((planet) => (
				<li key={planet.name}>
					<Link to={planet.name.replace(' ', '-')}>
						<h2>{planet.name}</h2>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default PlanetsList
