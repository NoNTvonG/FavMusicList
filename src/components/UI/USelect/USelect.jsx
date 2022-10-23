import React from 'react'
import style from './USelect.module.scss'

const USelect = ({ options, defaultValue, value, onChange }) => {
	return (
		<>
			<select
				className={style.select}
				value={value}
				onChange={e => onChange(e.target.value)}
			>
				<option disabled value={defaultValue}>
					{defaultValue}
				</option>
				{options ? (
					<>
						{options.map(option => (
							<option key={option.value} value={option.value}>
								{option.name}
							</option>
						))}
					</>
				) : (
					''
				)}
			</select>
		</>
	)
}

export default USelect
