import { useRouteLoaderData } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import SuspenseAwaitWrapper from '../components/SuspenseAwaitWrapper'
import RandomPlanetChoice from '../components/RandomPlanetChoice'

function HomePage() {
	const data = useRouteLoaderData('root')

	return (
		<>
			<PageTitle>Planets of the day</PageTitle>
			<SuspenseAwaitWrapper dataToResolve={data.planetData}>
				<RandomPlanetChoice />
			</SuspenseAwaitWrapper>
		</>
	)
}

export default HomePage
