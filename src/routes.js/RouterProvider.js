import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Link,
} from 'react-router-dom'
import RootLayout from '../components/RootLayout'
import HomePage from '../pages/HomePage'
import PlanetsPage from '../pages/PlanetsPage'
import PlanetsList from '../components/PlanetsList'
import PlanetPage from '../pages/PlanetPage'
import About from '../pages/About'
import ErrorPage from '../pages/ErrorPage'
import { loadPlanetData } from '../helpers/planetData'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<RootLayout />}
			errorElement={<ErrorPage />}
			loader={loadPlanetData}
			id={'root'}
		>
			<Route index element={<HomePage />} />
			<Route
				path="/planets"
				element={<PlanetsPage />}
				handle={{ crumb: () => <Link to="/">Home</Link> }}
			>
				<Route index element={<PlanetsList />} />
				<Route
					path=":id"
					element={<PlanetPage />}
					handle={{ crumb: () => <Link to="/planets">Planets</Link> }}
				/>
			</Route>
			<Route path="/about" element={<About />} />
		</Route>
	)
)

function RouteProvider() {
	return <RouterProvider router={router} />
}
export default RouteProvider
