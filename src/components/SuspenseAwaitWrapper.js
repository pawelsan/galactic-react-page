import { Suspense } from 'react'
import { Await } from 'react-router'
import { Box, LinearProgress, Typography } from '@mui/material'

function SuspenseAwaitWrapper({ dataToResolve, children }) {
	return (
		<Suspense
			fallback={
				<Box sx={{ width: '100%', height: '50vh' }}>
					<Typography variant="subtitle1">Loading archive data...</Typography>
					<LinearProgress />
				</Box>
			}
		>
			<Await
				resolve={dataToResolve}
				errorElement={
					<Typography variant="subtitle1">
						Error loading archives... Please try again later...
					</Typography>
				}
			>
				{children}
			</Await>
		</Suspense>
	)
}

export default SuspenseAwaitWrapper
