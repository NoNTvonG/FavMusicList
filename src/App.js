import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AlbumList, NavMenu, UButton, UInput } from './components'

function App() {
	const [name, setName] = useState('')
	const dispatch = useDispatch()

	const formHandler = event => {
		event.preventDefault()

		dispatch({
			type: 'ADD_ALBUM',
			payload: name,
		})

		setName('')
	}

	const nameChange = e => {
		setName(e.target.value)
	}

	return (
		<div className='App'>
			<NavMenu />
			<div className='container'>
				<div className='layout'>
					<form onSubmit={formHandler} className='form_add_album'>
						<h2 className='form_title'>Add new album</h2>
						<div className='form_data'>
							<UInput
								type='text'
								onChange={nameChange}
								value={name}
								className='input_name'
								placeholder='Write album name'
								required
							/>
							<UButton type='submit' className='btn1'>
								Add to list
							</UButton>
						</div>
					</form>

					<AlbumList />
				</div>
			</div>
		</div>
	)
}

export default App
