import { Outlet, useRouteLoaderData } from 'react-router-dom'
import SuspenseAwaitWrapper from '../components/SuspenseAwaitWrapper'

function ArchivesPages() {
	const data = useRouteLoaderData('root')

	return (
		<SuspenseAwaitWrapper dataToResolve={data.planetData}>
			<Outlet />
		</SuspenseAwaitWrapper>
	)
}

export default ArchivesPages
