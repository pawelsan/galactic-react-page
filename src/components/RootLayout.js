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
					height: '100vh',
				}}
			>
				<Navigation />
				{pathname === '/' && <Jumbotron />}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '100%',
						justifyContent: 'space-between',
					}}
				>
					<Container>
						<Breadcrumbs />
						<main>
							<Outlet />
						</main>
					</Container>
					<Footer />
				</Box>
			</Box>
		</>
	)
}

export default RootLayout
