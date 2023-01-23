import { useState } from 'react'
import { Box, TextField } from '@mui/material'

function SearchBox({ onSearch }) {
	const [value, setValue] = useState('')
	function handleChange(e) {
		setValue(e.target.value)
		onSearch(e.target.value)
	}

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				paddingTop: '20px',
			}}
		>
			<TextField
				variant="standard"
				label="Insert letters to filter the list"
				value={value}
				onChange={handleChange}
				color="grey"
				sx={{
					width: '200px',
				}}
			/>
		</Box>
	)
}

export default SearchBox
