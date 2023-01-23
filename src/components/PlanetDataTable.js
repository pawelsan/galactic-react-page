import { styled } from '@mui/material/styles'
import {
	Table,
	TableBody,
	TableContainer,
	TableRow,
	Typography,
} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { formatTableKeys, formatTableValues } from '../helpers/formatTableData'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}))

function createData(name, value) {
	return { name, value }
}

function PlanetDataTable({ planet }) {
	const rows = []
	for (const [key, value] of Object.entries(planet)) {
		const formattedTableValues = formatTableValues(key, value)
		rows.push(createData(formatTableKeys(key), formattedTableValues))
	}

	return (
		<TableContainer>
			<Typography
				variant="h6"
				sx={{ textAlign: 'center', bgcolor: 'grey.dark', color: 'sand.light' }}
			>
				Known features of the celestial body:
			</Typography>
			<Table aria-label="planet data table">
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.name}>
							<StyledTableCell component="th" scope="row">
								{row.name}
							</StyledTableCell>
							<StyledTableCell align="right">{row.value}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default PlanetDataTable
