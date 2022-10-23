import React from 'react'
import { Tile } from './index.js'
import { useSelector } from 'react-redux'
import { AlbumListFilter, AlbumListUIHandler } from './index.js'

const AlbumList = () => {
	const albums = useSelector(state => state.album.albums)
	const albumTypeUI = useSelector(state => state.album.albumsUI)

	return (
		<div className='album_list'>
			<div className='album_list_nav'>
				<AlbumListFilter />
				<AlbumListUIHandler />
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
