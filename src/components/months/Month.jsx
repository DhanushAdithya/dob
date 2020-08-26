import React from 'react'

export default () => {
	return (
		<ul>
			{Array.from({ length: 31 }, (v, i) => i + 1).map(e => {
				return <li key={'J' + e}>g</li>
			})}
		</ul>
	)
}
