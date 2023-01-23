import { Box, Tooltip } from '@mui/material'
import { getTerrainName } from '../helpers/terrainName'
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported'

function PlanetImage({ terrain }) {
	const imgName = terrain && getTerrainName(terrain)

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			{!terrain ? (
				<Tooltip title="Image not available">
					<ImageNotSupportedIcon fontSize="large" />
				</Tooltip>
			) : (
				<Box
					component="img"
					sx={{ width: '100%', maxWidth: '600px' }}
					src={require(`../images/${imgName}.jpg`)}
					alt="planet surface"
				/>
			)}
		</Box>
	)
}

export default PlanetImage
