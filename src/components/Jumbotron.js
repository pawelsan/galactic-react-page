import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import background1280 from '../images/galaxy_1280.jpg'
import background640 from '../images/galaxy_640.jpg'

function Jumbotron() {
	return (
		<Box
			sx={{
				backgroundImage: {
					xs: `url(${background640})`,
					md: `url(${background1280})`,
				},
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				marginBottom: '3rem',
			}}
		>
			<Box
				sx={{
					position: 'relative',
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					padding: '4rem 2rem',
				}}
			>
				<Container>
					<Typography color="sand.light" variant="h2">
						Welcome to the Galactic Archives
					</Typography>
					<Box sx={{ paddingBottom: '1rem' }}>
						<Typography
							color="sand.light"
							variant="h6"
							gutterBottom
							sx={{ fontStyle: 'italic' }}
						>
							"If an item does not appear in our records, it does not exist!"
						</Typography>
						<Typography color="sand.light" variant="subtitle1">
							- Jocasta Nu, "Star Wars: Episode II"
						</Typography>
					</Box>
					<Button
						component={RouterLink}
						variant="contained"
						color="sand"
						to="/planets"
					>
						Enter the Archives
					</Button>
				</Container>
			</Box>
		</Box>
	)
}

export default Jumbotron
