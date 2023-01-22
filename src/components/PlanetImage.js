import { Box, Tooltip } from '@mui/material'
import { getTerrainName } from '../helpers/terrainName'
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported'

function PlanetImage({ planet }) {
	const terrain = planet.terrain && getTerrainName(planet.terrain)

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			{!planet.terrain ? (
				<Tooltip title="Image not available">
					<ImageNotSupportedIcon fontSize="large" />
				</Tooltip>
			) : (
				<Box
					component="img"
					sx={{ width: '100%', maxWidth: '600px' }}
					src={require(`../images/${terrain}.jpg`)}
					alt="planet surface"
				/>
			)}
		</Box>
	)
}

export default PlanetImage
