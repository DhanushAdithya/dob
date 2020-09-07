import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
	SwipeableDrawer,
	List,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	Hidden,
	IconButton,
	Card,
	CardContent,
	Typography,
	Avatar,
	Icon,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	list: {
		width: 250,
	},
	menubutton: {
		color: '#323330',
	},
}))

export default function SwipeableTemporaryDrawer() {
	const classes = useStyles()
	const [state, setState] = useState(false)

	const toggleDrawer = open => event => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		)
			return

		setState(open)
	}

	const list = () => (
		<div
			className={classes.list}
			role='presentation'
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<Card className={classes.list}>
				<CardContent>
					<Typography variant='h5'>
						<Avatar>D</Avatar>
					</Typography>
				</CardContent>
			</Card>
			<List>
				{['Sign In', 'Sign Up', 'Sign Out', 'Create'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? 'HI' : 'Hello'}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? 'HI' : 'Hello'}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	)

	return (
		<div>
			<Hidden smUp>
				<IconButton
					className={classes.menubutton}
					onClick={toggleDrawer(true)}
				>
					<Icon>menu</Icon>
				</IconButton>
				<SwipeableDrawer
					anchor='right'
					open={state}
					onClose={toggleDrawer(false)}
					onOpen={toggleDrawer(true)}
				>
					{list()}
				</SwipeableDrawer>
			</Hidden>
		</div>
	)
}
