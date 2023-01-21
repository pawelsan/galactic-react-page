import RouteProvider from './routes.js/RouterProvider'
import ColorThemeProvider from './ColorThemeProvider'

function App() {
	return (
		<ColorThemeProvider>
			<RouteProvider />
		</ColorThemeProvider>
	)
}
export default App
