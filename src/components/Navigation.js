import { NavLink } from 'react-router-dom'

function Navigation() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/planets">Planets</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navigation
