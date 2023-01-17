import { Outlet, useRouteLoaderData } from 'react-router-dom'
import PlanetListFilter from '../components/PlanetListFilter'
import SuspenseAwaitWrapper from '../components/SuspenseAwaitWrapper'

function PlanetsPage() {
	const data = useRouteLoaderData('root')

	return (
		<>
			<h1>PlanetsPage</h1>
			<PlanetListFilter />
			<SuspenseAwaitWrapper dataToResolve={data.planetData}>
				<Outlet />
			</SuspenseAwaitWrapper>
		</>
	)
}

export default PlanetsPage
