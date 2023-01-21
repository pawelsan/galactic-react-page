import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
	palette: {
		bgWhite: {
			main: '#f8f9fa',
		},
		sand: {
			light: '#d1bfa7',
			main: '#bd8c7d',
		},
		grey: {
			light: '#8e8e90',
			main: '#8e8e90',
			dark: '#212529',
		},
	},
})

function ColorThemeProvider({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ColorThemeProvider
