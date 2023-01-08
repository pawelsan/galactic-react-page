import { Outlet } from 'react-router-dom'
import PlanetListFilter from '../components/PlanetListFilter'

function PlanetsPage() {
	return (
		<>
			<h1>PlanetsPage</h1>
			<PlanetListFilter />
			<Outlet />
		</>
	)
}

export default PlanetsPage
