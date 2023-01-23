import { useLocation } from 'react-router-dom'

export function useBreadcrumbs() {
	const location = useLocation()
	const crumbs = location.pathname
		.split('/')
		.filter((el) => el)
		.map((el) => {
			return {
				name: el,
				path: `/${el}`,
			}
		})
	crumbs.unshift({
		name: 'home',
		path: `/`,
	})
	const currentCrumb = crumbs.pop()
	return [crumbs, currentCrumb]
}
