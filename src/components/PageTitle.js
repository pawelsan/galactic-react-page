import { Typography } from '@mui/material'

function PageTitle({ children }) {
	return (
		<Typography
			variant="h4"
			component="h2"
			sx={{
				marginTop: '1rem',
				padding: '.5rem',
				textAlign: 'center',
				bgcolor: 'sand.light',
			}}
		>
			{children}
		</Typography>
	)
}

export default PageTitle
