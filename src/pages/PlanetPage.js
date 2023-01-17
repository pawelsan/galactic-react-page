import { useParams } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material'
import { useSelectedPlanetData } from '../hooks/useSelectedPlanetData'
import { getTerrainName } from '../helpers/terrainName'
import PlanetDataTable from '../components/PlanetDataTable'

function PlanetPage() {
	const { id } = useParams()
	const planet = useSelectedPlanetData(id)
	const terrain = getTerrainName(planet.terrain)

	return (
		<>
			<Typography variant="h2">{planet.name}</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} lg={6}>
					<Box
						component="img"
						sx={{ width: '100%', maxWidth: '600px' }}
						src={require(`../images/${terrain}.jpg`)}
						alt="planet surface"
					/>
				</Grid>
				<Grid item xs={12} lg={6}>
					<PlanetDataTable planet={planet} />
				</Grid>
			</Grid>
		</>
	)
}

export default PlanetPage
