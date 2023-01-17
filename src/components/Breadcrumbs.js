import { Link as RouterLink } from 'react-router-dom'
import { Breadcrumbs as MuiBreadCrumbs, Link } from '@mui/material'
import { useBreadcrumbs } from '../hooks/useBreadcrumbs'
import { capitalize } from '../helpers/capitalize'

export function Breadcrumbs() {
	const [crumbs, currentCrumb] = useBreadcrumbs()

	return (
		<MuiBreadCrumbs>
			{crumbs.length
				? crumbs.map((crumb, index) => (
						<Link
							component={RouterLink}
							key={index}
							to={crumb.path}
							underline="hover"
							color="inherit"
						>
							{capitalize(crumb.name)}
						</Link>
				  ))
				: null}
			<span>{capitalize(currentCrumb.name).replace('-', ' ')}</span>
		</MuiBreadCrumbs>
	)
}
