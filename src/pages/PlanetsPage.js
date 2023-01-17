import { Outlet, useRouteLoaderData } from 'react-router-dom'
import SuspenseAwaitWrapper from '../components/SuspenseAwaitWrapper'

function PlanetsPage() {
	const data = useRouteLoaderData('root')

	return (
		<SuspenseAwaitWrapper dataToResolve={data.planetData}>
			<Outlet />
		</SuspenseAwaitWrapper>
	)
}

export default PlanetsPage
