const initialState = {
	albums: JSON.parse(localStorage.getItem('albums') || '[]'),
	albumsUI: localStorage.getItem('albumsUI') || 'grid',
}

function saveLocalAlbums(data) {
	localStorage.setItem('albums', JSON.stringify(data))
}
function saveLocalUI(data) {
	localStorage.setItem('albumsUI', data)
}

export const albumReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_ALBUM':
			let addAlbum = {
				...state,
				albums: [
					...state.albums,
					{
						id: state.albums.length,
						name: action.payload,
						addTime: Date.now(),
						like: false,
					},
				],
			}
			saveLocalAlbums(addAlbum.albums)

			return addAlbum

		case 'DEL_ALBUM':
			let delAlbum = {
				...state,
				albums: state.albums.filter(album => album.id !== action.payload),
			}
			saveLocalAlbums(delAlbum.albums)

			return delAlbum

		case 'SET_BEST_OF_THE_BEST':
			let setBOTB = {
				...state,
				albums: state.albums.map(album =>
					album.id === action.payload
						? {
								...album,
								like: !album.like,
						  }
						: album
				),
			}
			saveLocalAlbums(setBOTB.albums)

			return setBOTB

		case 'ALBUM_UI_HANDLER':
			let handlerUI = {
				...state,
				albumsUI: action.payload,
			}
			saveLocalUI(handlerUI.albumsUI)

			return handlerUI

		case 'SORTED_BY_ID':
			return {
				...state,
				albums: [...state.albums].sort((a, b) => {
					if (a.id < b.id) return -1
					if (a.id > b.id) return 1
					return 0
				}),
			}
		case 'SORTED_BY_NAME':
			return {
				...state,
				albums: [...state.albums].sort((a, b) => {
					if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
					if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
					return 0
				}),
			}
		case 'SORTED_BY_DATE':
			return {
				...state,
				albums: [...state.albums].sort((a, b) => {
					if (a.addTime < b.addTime) return -1
					if (a.addTime > b.addTime) return 1
					return 0
				}),
			}
		default:
			return state
	}
}
