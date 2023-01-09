import { useMatches } from 'react-router-dom'

export function Breadcrumbs() {
	const matches = useMatches()
	const crumbs = matches
		// first get rid of any matches that don't have handle and crumb
		.filter((match) => Boolean(match.handle?.crumb))
		// now map them into an array of elements, passing the loader
		// data to each one
		.map((match) => match.handle.crumb(match.data))

	return (
		<div>
			{crumbs.map((crumb, index) => (
				<>
					{index !== 0 && <span>/</span>}
					<span key={index}>{crumb}</span>
				</>
			))}
		</div>
	)
}
