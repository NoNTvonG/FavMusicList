import React from 'react'
import { GiMusicalNotes } from 'react-icons/gi'

const NavMenu = () => {
	return (
		<header>
			<div className='container'>
				<div className='header__wrapper'>
					<div className='logo'>
						<GiMusicalNotes /> FavMusicList App
					</div>
				</div>
			</div>
		</header>
	)
}

export default NavMenu
