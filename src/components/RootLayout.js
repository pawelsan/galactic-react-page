import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import { Breadcrumbs } from './Breadcrumbs'
import { Box, Container, CssBaseline } from '@mui/material'

function RootLayout() {
	return (
		<>
			<CssBaseline />
			<Container maxWidth="xl">
				<Box sx={{ bgcolor: '#cfe8fc' }}>
					<Navigation />
					<Breadcrumbs />
					<main>
						<Outlet />
					</main>
				</Box>
			</Container>
		</>
	)
}

export default RootLayout
