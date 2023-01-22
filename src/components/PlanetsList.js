import { useMemo, useState } from 'react'
import { Link as RouterLink, useAsyncValue } from 'react-router-dom'
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	Pagination,
	Typography,
} from '@mui/material'
import PageTitle from './PageTitle'
import PlanetListFilter from '../components/PlanetListFilter'

function PlanetsList() {
	const planets = useAsyncValue()
	const [page, setPage] = useState(1)
	const handleChange = (e, value) => {
		setPage(value)
	}
	const postsPerPage = 10
	const count = useMemo(
		function () {
			return Math.ceil(planets.length / postsPerPage)
		},
		[planets.length, postsPerPage]
	)

	const indexOfLastPlanet = page * postsPerPage
	const indexOfFirstPlanet = indexOfLastPlanet - postsPerPage
	const currentPlanets = planets.slice(indexOfFirstPlanet, indexOfLastPlanet)

	return (
		<>
			<PageTitle>Search the Galactic Archives!</PageTitle>
			<PlanetListFilter />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<List sx={{ minWidth: { xs: '100vw', md: '50vw' } }}>
					{currentPlanets.map((planet) => (
						<ListItem key={planet.name}>
							<ListItemButton
								component={RouterLink}
								to={planet.name.replace(' ', '-')}
								sx={{
									'&:hover': {
										bgcolor: 'sand.light',
									},
								}}
								divider
							>
								<Typography variant="subtitle1" sx={{ margin: '0 auto' }}>
									{planet.name}
								</Typography>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Pagination count={count} page={page} onChange={handleChange} />
			</Box>
		</>
	)
}

export default PlanetsList
