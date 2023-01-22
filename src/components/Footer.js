import { NavLink } from 'react-router-dom'
import {
	Box,
	Link,
	List,
	ListItem,
	ListItemButton,
	Typography,
} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				mt: 3,
				bgcolor: 'grey.main',
			}}
		>
			<Box>
				<List sx={{ display: 'flex' }}>
					<ListItem>
						<ListItemButton
							component={NavLink}
							to="/disclaimer"
							sx={{ color: 'sand.light' }}
						>
							Disclaimer
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton
							component={NavLink}
							to="/about"
							sx={{ color: 'sand.light' }}
						>
							About
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton
							component={Link}
							href="https://www.linkedin.com/in/pawe%C5%82-hi%C5%84cza-105926103/"
							target="_blank"
							sx={{ color: 'sand.light' }}
						>
							<LinkedInIcon />
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton
							component={Link}
							href="https://github.com/pawelsan"
							target="_blank"
							sx={{ color: 'sand.light' }}
						>
							<GitHubIcon />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
			<Typography color="sand.light" sx={{ m: 2 }}>
				&copy; Paweł Hińcza, {new Date().getFullYear()}
			</Typography>
		</Box>
	)
}

export default Footer
