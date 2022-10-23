import React from 'react'
import { BsGridFill, BsList } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

const AlbumListUI = () => {
	const dispatch = useDispatch()

	const albumTypeUI = useSelector(state => state.album.albumsUI)
	const viewGrid = () => {
		dispatch({
			type: 'ALBUM_UI_HANDLER',
			payload: 'grid',
		})
	}
	const viewList = () => {
		dispatch({
			type: 'ALBUM_UI_HANDLER',
			payload: 'list',
		})
	}
	return (
		<div className='album_list_handlers'>
			<button
				className={`list ${albumTypeUI === 'list' ? 'active' : ''}`}
				onClick={viewList}
			>
				<BsList />
			</button>
			<button
				className={`grid ${albumTypeUI === 'grid' ? 'active' : ''}`}
				onClick={viewGrid}
			>
				<BsGridFill />
			</button>
		</div>
	)
}

export default AlbumListUI
