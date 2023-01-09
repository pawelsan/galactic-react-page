import { Link } from 'react-router-dom'
import { useBreadcrumbs } from '../hooks/useBreadcrumbs'
import { capitalize } from '../helpers/capitalize'

export function Breadcrumbs() {
	const [crumbs, currentCrumb] = useBreadcrumbs()

	return (
		<div>
			{crumbs.length
				? crumbs.map((crumb, index) => (
						<span key={index}>
							<Link to={crumb.path}>{capitalize(crumb.name)}</Link>
							{' / '}
						</span>
				  ))
				: null}
			<span>{capitalize(currentCrumb.name).replace('-', ' ')}</span>
		</div>
	)
}
