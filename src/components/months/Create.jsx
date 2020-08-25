import React, { useState } from 'react'
import {
	Typography,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
} from '@material-ui/core'

import {
	StyledSubmit,
	StyledFormContainer,
	StyledFormPaper,
} from '../../styles/styled'

export default () => {
	const [month, setMonth] = useState('April')
	const [date, setDate] = useState('1')
	const MONTHS = [
		{ month: 'January', days: 31 },
		{ month: 'February', days: 29 },
		{ month: 'March', days: 31 },
		{ month: 'April', days: 30 },
		{ month: 'May', days: 31 },
		{ month: 'June', days: 30 },
		{ month: 'July', days: 31 },
		{ month: 'August', days: 31 },
		{ month: 'September', days: 30 },
		{ month: 'October', days: 31 },
		{ month: 'November', days: 30 },
		{ month: 'December', days: 31 },
	]

	return (
		<StyledFormContainer maxWidth='sm'>
			<StyledFormPaper component='form'>
				<Typography variant='h4' align='center'>
					Create
				</Typography>
				<FormControl fullWidth>
					<InputLabel htmlFor='Month'>Month</InputLabel>
					<Select
						id='Month'
						label='Month'
                        onChange={e => setMonth(e.target.value)}
                        value={month}
					>
						{MONTHS.map(i => {
							return (
								<MenuItem
									value={i.month}
									key={i.month}
									children={i.month}
								/>
							)
						})}
					</Select>
				</FormControl>
				<FormControl fullWidth>
					<InputLabel htmlFor='Date'>Date</InputLabel>
					<Select
						id='Date'
						label='Date'
                        onChange={e => setDate(e.target.value)}
                        value={date}
					>
						{Array.from(
							{ length: MONTHS.filter(_ => _.month === month)[0].days },
							(v, i) => i + 1
						).map((i, _) => {
							return (
								<MenuItem
									value={i}
									key={`${month+_}`}
									children={i}
								/>
							)
						})}
					</Select>
				</FormControl>
				<StyledSubmit color='secondary' variant='outlined'>
					Login
				</StyledSubmit>
			</StyledFormPaper>
		</StyledFormContainer>
	)
}