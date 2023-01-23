import { useMemo, useState } from 'react'

export function usePagination(postsPerPage, planetList) {
	const [page, setPage] = useState(1)
	function handlePageChange(e, value) {
		setPage(value)
	}

	const count = useMemo(
		function () {
			return Math.ceil(planetList.length / postsPerPage)
		},
		[planetList.length, postsPerPage]
	)
	return { page, handlePageChange, count }
}
