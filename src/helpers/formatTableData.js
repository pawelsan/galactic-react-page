import { capitalize } from './capitalize'

export function formatTableKeys(key) {
	return capitalize(key.split('_').join(' ') + ':')
}

export function formatTableValues(key, value) {
	switch (key) {
		case 'rotation_period':
			return `${value} hours`
		case 'orbital_period':
			return `${value} days`
		case 'diameter':
			return `${(value / 1000).toLocaleString('en-US')} thousand km`
		case 'population':
			if (value >= 1000000000000) {
				return `${(value / 1000000000000).toLocaleString('en-US')} trillion`
			}
			if (value >= 1000000000) {
				return `${(value / 1000000000).toLocaleString('en-US')} billion`
			}
			if (value >= 1000000) {
				return `${(value / 1000000).toLocaleString('en-US')} million`
			}
			if (value >= 1000) {
				return `${(value / 1000).toLocaleString('en-US')} thousand`
			}
			return `${value.toLocaleString('en-US')}`
		case 'surface_water':
			return `${value}%`
		case 'total_surface':
			return `${(value / 1000000).toLocaleString('en-US')} million sq km`
		case 'population_density':
			if (value > 1) {
				return `${value.toLocaleString('en-US')} people per sq km`
			}
			if (value === 1) {
				return `${value.toLocaleString('en-US')} person per sq km`
			}
			return `Less than 1 person per sq km`
		default:
			return value
	}
}
