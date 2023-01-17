import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
	AppBar,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	Toolbar,
	Typography,
	Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { title, navItems } from '../constants/constants'

function Navigation() {
	const [mobileOpen, setMobileOpen] = useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState)
	}

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				{title}
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item.to}>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<NavLink to={item.to}>{item.name}</NavLink>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar component="nav" position="static">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						PH's Galactic Archives
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item) => (
							<Button
								component={NavLink}
								key={item.to}
								to={item.to}
								variant="contained"
							>
								{item.name}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	)
}

export default Navigation
