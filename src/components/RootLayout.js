import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import { Breadcrumbs } from './Breadcrumbs'

function RootLayout() {
	return (
		<>
			<Navigation />
			<Breadcrumbs />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default RootLayout
