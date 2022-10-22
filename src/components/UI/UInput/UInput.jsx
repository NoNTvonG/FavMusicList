import React from 'react'
import style from './UInput.module.scss'

const UInput = ({
	type,
	name,
	required,
	onChange,
	value,
	placeholder,
	className,
}) => {
	return (
		<>
			<input
				type={type ? type : 'text'}
				onChange={onChange}
				className={`${style.input} ${className ? className : ''}`}
				name={name ? name : ''}
				value={value}
				placeholder={placeholder}
				required={required ? required : ''}
			/>
		</>
	)
}

export default UInput
