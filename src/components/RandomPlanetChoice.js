import { useAsyncValue } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import {
	Box,
	Card,
	CardContent,
	List,
	ListItem,
	Typography,
} from '@mui/material'
import PlanetImage from './PlanetImage'
import { useRandomPlanetChoice } from '../hooks/useRandomPlanetChoice'

function RandomPlanetChoice() {
	const planets = useAsyncValue()
	const randomPlanetChoice = useRandomPlanetChoice(planets)
	return (
		<List sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
			{randomPlanetChoice.map((planet, index) => (
				<ListItem
					component={RouterLink}
					to={'planets/' + planet.name.replace(' ', '-')}
					key={index}
				>
					<Card>
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color="text.secondary"
								gutterBottom
							>
								{`#${index + 1} Planet of the Day`}
							</Typography>
							<Box sx={{ height: '180px', overflow: 'hidden' }}>
								<PlanetImage terrain={planet.terrain} />
							</Box>

							<Typography variant="h5" component="h5" sx={{ mt: 2 }}>
								{planet.name}
							</Typography>
						</CardContent>
					</Card>
				</ListItem>
			))}
		</List>
	)
}

export default RandomPlanetChoice
