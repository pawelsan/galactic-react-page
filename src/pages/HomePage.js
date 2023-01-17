import { useRouteLoaderData } from 'react-router-dom'
import { Typography } from '@mui/material'
import SuspenseAwaitWrapper from '../components/SuspenseAwaitWrapper'
import RandomPlanetChoice from '../components/RandomPlanetChoice'

function HomePage() {
	const data = useRouteLoaderData('root')

	return (
		<>
			<Typography variant="h1">HomePage</Typography>
			<SuspenseAwaitWrapper dataToResolve={data.planetData}>
				<RandomPlanetChoice />
			</SuspenseAwaitWrapper>
		</>
	)
}

export default HomePage
