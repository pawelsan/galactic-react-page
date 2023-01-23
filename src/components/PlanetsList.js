import { useState } from 'react'
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
import SearchBox from './SearchBox'
import { usePagination } from '../hooks/usePagination'
import { filterPlanetsOnInputChange } from '../helpers/planetData'

function PlanetsList() {
	const postsPerPage = 10
	const planets = useAsyncValue()
	const [filteredPlanets, setFilteredPlanets] = useState(planets)

	const { page, handlePageChange, count } = usePagination(
		postsPerPage,
		filteredPlanets
	)

	function handlePlanetSearch(searchValue) {
		const filteredList = filterPlanetsOnInputChange(searchValue, planets)
		setFilteredPlanets(filteredList)
	}

	const indexOfLastPlanet = page * postsPerPage
	const indexOfFirstPlanet = indexOfLastPlanet - postsPerPage
	const currentPlanets = filteredPlanets.slice(
		indexOfFirstPlanet,
		indexOfLastPlanet
	)

	return (
		<>
			<PageTitle>Search the Galactic Archives!</PageTitle>
			<SearchBox onSearch={handlePlanetSearch} />
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
				<Pagination count={count} page={page} onChange={handlePageChange} />
			</Box>
		</>
	)
}

export default PlanetsList
