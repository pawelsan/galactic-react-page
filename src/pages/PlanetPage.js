import { useParams } from 'react-router-dom'
import { useSelectedPlanetData } from '../hooks/useSelectedPlanetData'
import { getTerrainName } from '../helpers/terrainName'

function PlanetPage() {
	const { id } = useParams()
	const planet = useSelectedPlanetData(id)

	const terrain = getTerrainName(planet.terrain)
	const planetInfoArray = Object.values(planet)

	return (
		<>
			<h2>{planet.name}</h2>
			<img src={require(`../images/${terrain}.jpg`)} alt="planet surface" />
			<ul>
				{planetInfoArray.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</>
	)
}

export default PlanetPage
