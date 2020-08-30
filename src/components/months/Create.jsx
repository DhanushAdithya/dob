import React, { useState } from 'react'
import {
	Typography,
	Select,
	MenuItem,
	InputLabel,
	ThemeProvider,
} from '@material-ui/core'

import {
	StyledSubmit,
	StyledFormContainer,
	StyledFormPaper,
	StyledSelect,
} from '../../styles/styled'
import { Formtheme } from '../../styles/muiTheme'
import { MONTHS } from '../../assets/months'

export default () => {
	const [month, setMonth] = useState('April')
	const [date, setDate] = useState('1')

	return (
		<ThemeProvider theme={Formtheme}>
			<StyledFormContainer maxWidth='sm'>
				<StyledFormPaper component='form' onSubmit={() => {}}>
					<Typography variant='h4' align='center'>
						Create
					</Typography>
					<StyledSelect fullWidth>
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
					</StyledSelect>
					<StyledSelect fullWidth>
						<InputLabel htmlFor='Date'>Date</InputLabel>
						<Select
							id='Date'
							label='Date'
							onChange={e => setDate(e.target.value)}
							value={date}
						>
							{Array.from(
								{
									length: MONTHS.filter(_ => _.month === month)[0]
										.days,
								},
								(v, i) => i + 1
							).map((i, _) => {
								return (
									<MenuItem
										value={i}
										key={`${month + _}`}
										children={i}
									/>
								)
							})}
						</Select>
					</StyledSelect>
					<StyledSubmit color='primary' variant='outlined'>
						Add
					</StyledSubmit>
				</StyledFormPaper>
			</StyledFormContainer>
		</ThemeProvider>
	)
}
