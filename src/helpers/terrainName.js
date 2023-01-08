import { terrainPictures } from '../constants/constants'

export function getTerrainName(terrainTypesString) {
	const terrainList = terrainTypesString.split(', ')

	// Aligning terrain types with respective images
	const terrainName = terrainPictures.find((pictureName) =>
		pictureName.includes(terrainList[0])
	)
	return terrainName
}
