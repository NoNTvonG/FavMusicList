import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { USelect } from './index.js'

const AlbumListFilter = () => {
	const [selectedSort, setSelectedSort] = useState('')

	const dispatch = useDispatch()

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
	)
}

export default AlbumListFilter
