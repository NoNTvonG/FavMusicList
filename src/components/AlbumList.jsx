import React, { useState } from 'react'
import { Tile } from './index.js'
import { BsGridFill, BsList } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { USelect } from './index.js'

const AlbumList = () => {
	const [selectedSort, setSelectedSort] = useState('')
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

	const albums = useSelector(state => state.album.albums)
	const albumTypeUI = useSelector(state => state.album.albumsUI)

	const sortAlbums = sort => {
		setSelectedSort(sort)

		if (sort === 'date') {
			dispatch({ type: 'SORTED_BY_DATE' })
		}
		if (sort === 'name') {
			dispatch({ type: 'SORTED_BY_NAME' })
		}
		if (sort === 'id') {
			dispatch({ type: 'SORTED_BY_ID' })
		}
	}

	return (
		<div className='album_list'>
			<div className='album_list_nav'>
				<div className='album_list_filter'>
					<span className='filter_title'>Sorted by:</span>
					<USelect
						defaultValue={'Sorted by'}
						value={selectedSort}
						onChange={sortAlbums}
						options={[
							{ value: 'id', name: 'id' },
							{ value: 'name', name: 'name' },
							{ value: 'date', name: 'date' },
						]}
					/>
				</div>
				<div className='album_list_handlers'>
					<button className='list' onClick={viewList}>
						<BsList />
					</button>
					<button className='grid' onClick={viewGrid}>
						<BsGridFill />
					</button>
				</div>
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
