import { Suspense } from 'react'
import { Await } from 'react-router'

function SuspenseAwaitWrapper({ dataToResolve, children }) {
	return (
		<Suspense fallback={<p>Loading archive data...</p>}>
			<Await
				resolve={dataToResolve}
				errorElement={
					<p>Error loading archives... Please try again later...</p>
				}
			>
				{children}
			</Await>
		</Suspense>
	)
}

export default SuspenseAwaitWrapper
