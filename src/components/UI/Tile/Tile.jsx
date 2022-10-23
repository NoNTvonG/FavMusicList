import React from 'react'
import style from './Tile.module.scss'
import { TiStarFullOutline } from 'react-icons/ti'
import { BsFillTrashFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Tile = ({ album }) => {
	const dispatch = useDispatch()

	const removeAlbum = event => {
		dispatch({
			type: 'DEL_ALBUM',
			payload: album.id,
		})
	}

	const likeAlbum = event => {
		dispatch({
			type: 'SET_BEST_OF_THE_BEST',
			payload: album.id,
		})
	}

	const albumTypeUI = useSelector(state => state.album.albumsUI)

	return (
		<div
			className={`${albumTypeUI === 'grid' ? style.tile : ''} ${
				albumTypeUI === 'list' ? style.list : ''
			} ${album.like ? style.like : ''}`}
		>
			<h2 className={style.name}>{album.name}</h2>
			<div className={style.buttons}>
				<button
					className={`${style.star} ${album.like ? style.active : ''}`}
					onClick={likeAlbum}
				>
					<TiStarFullOutline />
				</button>
				<button className={style.trash} onClick={removeAlbum}>
					<BsFillTrashFill />
				</button>
			</div>
		</div>
	)
}

export default Tile
