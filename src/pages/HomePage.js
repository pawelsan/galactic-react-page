import { useRouteLoaderData } from 'react-router-dom'
import SuspenseAwaitWrapper from '../components/SuspenseAwaitWrapper'
import RandomPlanetChoice from '../components/RandomPlanetChoice'

function HomePage() {
	const data = useRouteLoaderData('root')

	return (
		<>
			<h1>HomePage</h1>
			<SuspenseAwaitWrapper dataToResolve={data.planetData}>
				<RandomPlanetChoice />
			</SuspenseAwaitWrapper>
		</>
	)
}

export default HomePage
