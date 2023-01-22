import { useParams, Link as RouterLink } from 'react-router-dom'
import { Box, Button, Grid } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useSelectedPlanetData } from '../hooks/useSelectedPlanetData'
import PageTitle from '../components/PageTitle'
import PlanetImage from '../components/PlanetImage'
import PlanetDataTable from '../components/PlanetDataTable'

function PlanetPage() {
	const { id } = useParams()
	const [planet, prevId, nextId] = useSelectedPlanetData(id)

	return (
		<>
			<PageTitle>{planet.name}</PageTitle>
			<Box
				sx={{
					position: { md: 'relative' },
					top: '-45px',
					display: 'flex',
					justifyContent: 'space-between',
					margin: { xs: '10px', md: '0 10px' },
				}}
			>
				{prevId && (
					<Button
						component={RouterLink}
						variant="contained"
						color="sand"
						to={`../${prevId}`}
						sx={{
							marginRight: 'auto',
						}}
						size="small"
					>
						<NavigateBeforeIcon color="grey.dark" />
						Previous Planet
					</Button>
				)}
				{nextId && (
					<Button
						component={RouterLink}
						variant="contained"
						color="sand"
						to={`../${nextId}`}
						sx={{
							marginLeft: 'auto',
						}}
						size="small"
					>
						Next Planet
						<NavigateNextIcon color="grey.dark" />
					</Button>
				)}
			</Box>
			<Grid container spacing={2}>
				<Grid item xs={12} lg={6}>
					<PlanetImage planet={planet} />
				</Grid>
				<Grid item xs={12} lg={6}>
					<PlanetDataTable planet={planet} />
				</Grid>
			</Grid>
		</>
	)
}

export default PlanetPage
