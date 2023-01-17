import { Link as RouterLink, useAsyncValue } from 'react-router-dom'
import { Link, List, ListItem, ListItemButton, Typography } from '@mui/material'
import PlanetListFilter from '../components/PlanetListFilter'

function PlanetsList() {
	const planets = useAsyncValue()

	return (
		<>
			<PlanetListFilter />
			<List>
				{planets.map((planet) => (
					<ListItem key={planet.name}>
						<ListItemButton>
							<Link component={RouterLink} to={planet.name.replace(' ', '-')}>
								<Typography variant="subtitle1">{planet.name}</Typography>
							</Link>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default PlanetsList
