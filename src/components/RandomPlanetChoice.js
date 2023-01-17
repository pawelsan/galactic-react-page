import { useAsyncValue } from 'react-router'
import { useRandomPlanetChoice } from '../hooks/useRandomPlanetChoice'
import { Card, CardContent, Typography, List, ListItem } from '@mui/material'

function RandomPlanetChoice() {
	const planets = useAsyncValue()
	const randomPlanetChoice = useRandomPlanetChoice(planets)
	return (
		<List>
			{randomPlanetChoice.map((planet, index) => (
				<ListItem key={index}>
					<Card sx={{ minWidth: 275 }}>
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color="text.secondary"
								gutterBottom
							>
								Planet of the Day
							</Typography>
							<Typography variant="h5" component="h5">
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
