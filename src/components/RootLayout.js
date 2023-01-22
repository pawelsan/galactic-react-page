import { Outlet, useLocation } from 'react-router-dom'
import { Box, Container, CssBaseline } from '@mui/material'
import Navigation from './Navigation'
import Jumbotron from './Jumbotron'
import { Breadcrumbs } from './Breadcrumbs'
import Footer from './Footer'

function RootLayout() {
	const { pathname } = useLocation()
	return (
		<>
			<CssBaseline />
			<Box
				sx={{
					bgcolor: 'bgwhite.main',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Navigation />
				{pathname === '/' && <Jumbotron />}
				<Container>
					<Breadcrumbs />
					<main sx={{ flexGrow: '1' }}>
						<Outlet />
					</main>
				</Container>
				<Footer />
			</Box>
		</>
	)
}

export default RootLayout
