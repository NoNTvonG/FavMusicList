import React from 'react'
import { AddNewAlbumForm, AlbumList, NavMenu } from './components'

function App() {
	return (
		<div className='App'>
			<NavMenu />
			<div className='container'>
				<div className='layout'>
					<AddNewAlbumForm />
					<AlbumList />
				</div>
			</div>
		</div>
	)
}

export default App
