import React from 'react'
import { Tile } from './index.js'
import { BsGridFill, BsList } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

const AlbumList = ({ albums }) => {
	const dispatch = useDispatch()

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

	const albumTypeUI = useSelector(state => state.album.albumsUI)

	return (
		<div className='album_list'>
			<div className='album_list_handlers'>
				<button className='list' onClick={viewList}>
					<BsList />
				</button>
				<button className='grid' onClick={viewGrid}>
					<BsGridFill />
				</button>
			</div>
			<div className={`album_list_${albumTypeUI}`}>
				{albums ? (
					<>
						{albums.map(album => (
							<Tile album={album} key={album.id} />
						))}
					</>
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default AlbumList
