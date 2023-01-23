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
import Disclaimer from '../pages/Disclaimer'
import PageNotFound from '../pages/PageNotFound'
import { loadPlanetData } from '../helpers/planetData'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<RootLayout />}
			errorElement={<p>Error processing data. Please reload the page</p>}
			loader={loadPlanetData}
			id={'root'}
		>
			<Route index element={<HomePage />} />
			<Route path="/planets" element={<ArchivesPages />}>
				<Route index element={<PlanetsList />} />
				<Route path=":id" element={<PlanetPage />} />
			</Route>
			<Route path="/about" element={<About />} />
			<Route path="/disclaimer" element={<Disclaimer />} />
			<Route path="/*" element={<PageNotFound />} />
		</Route>
	)
)

function RouteProvider() {
	return <RouterProvider router={router} />
}
export default RouteProvider
