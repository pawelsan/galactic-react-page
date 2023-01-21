import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom'
import RootLayout from '../components/RootLayout'
import HomePage from '../pages/HomePage'
import ArchivesPages from '../pages/ArchivesPages'
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
			<Route path="/planets" element={<ArchivesPages />}>
				<Route index element={<PlanetsList />} />
				<Route path=":id" element={<PlanetPage />} />
			</Route>
			<Route path="/about" element={<About />} />
		</Route>
	)
)

function RouteProvider() {
	return <RouterProvider router={router} />
}
export default RouteProvider
