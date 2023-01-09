import { Link, useRouteLoaderData } from 'react-router-dom'

function PlanetsList() {
	const planets = useRouteLoaderData('root')
	return (
		<>
			<h1>Our Planets</h1>
			<ul>
				{planets.map((planet) => (
					<li key={planet.name}>
						<Link to={planet.name.replace(' ', '-')}>
							<h2>{planet.name}</h2>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default PlanetsList
