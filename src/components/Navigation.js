import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
	AppBar,
	Box,
	Container,
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
		<Container sx={{ display: 'flex', padding: '0.5rem' }}>
			<CssBaseline />
			<AppBar
				component="nav"
				position="static"
				sx={{
					bgcolor: 'white',
					boxShadow: 'none',
				}}
			>
				<Toolbar
					sx={{
						width: {
							xs: '100%',
							bgcolor: 'white',
							justifyContent: 'space-between',
						},
					}}
				>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon color="grey" />
					</IconButton>
					<Box
						component="img"
						sx={{ width: '90px' }}
						src={require(`../images/logo.png`)}
						alt="plogo"
					/>
					<Typography
						variant="subtitle1"
						component="div"
						color="grey.dark"
						sx={{
							flexGrow: 1,
							display: { xs: 'none', sm: 'block' },
							marginLeft: '1rem',
						}}
					>
						PH's Galactic Archives
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item) => (
							<Button
								component={NavLink}
								key={item.to}
								to={item.to}
								sx={{ color: 'black' }}
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
		</Container>
	)
}

export default Navigation
