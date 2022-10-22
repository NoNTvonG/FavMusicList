import React from 'react'
import style from './UButton.module.scss'

const UButton = ({ children, type, className }) => {
	return (
		<>
			<button
				type={type ? type : 'submit'}
				className={`${style.btn} ${style[className]}`}
			>
				{children}
			</button>
		</>
	)
}

export default UButton
