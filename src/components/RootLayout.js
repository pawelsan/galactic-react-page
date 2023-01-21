import { Outlet, useLocation } from 'react-router-dom'
import { Box, Container, CssBaseline } from '@mui/material'
import Navigation from './Navigation'
import Jumbotron from './Jumbotron'
import { Breadcrumbs } from './Breadcrumbs'

function RootLayout() {
	const { pathname } = useLocation()
	return (
		<>
			<CssBaseline />
			<Box sx={{ bgcolor: 'bgwhite.main' }}>
				<Navigation />
				{pathname === '/' && <Jumbotron />}
				<Container>
					<Breadcrumbs />
					<main>
						<Outlet />
					</main>
				</Container>
			</Box>
		</>
	)
}

export default RootLayout
