import { Box, Button, List, ListItem, Link, Typography } from '@mui/material'

function Disclaimer() {
	return (
		<Box sx={{ mt: 4 }}>
			<Typography variant="h3">Disclaimer</Typography>
			<Typography variant="subtitle1">
				The sources used in this website include:
			</Typography>
			<List>
				<ListItem>
					<Typography variant="subtitle1">
						Data from the Star Wars API:
					</Typography>
					<Button component={Link} href="https://swapi.dev" target="_blank">
						the Star Wars API
					</Button>
				</ListItem>
				<ListItem>
					<Typography variant="subtitle1">
						Pictures from Pixabay in accordance with its license provisions:
					</Typography>
					<Button
						component={Link}
						href="https://pixabay.com/pl/"
						target="_blank"
					>
						Pixabay
					</Button>
				</ListItem>
			</List>
		</Box>
	)
}

export default Disclaimer
