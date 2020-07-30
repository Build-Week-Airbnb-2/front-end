import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteListing } from '../store/actions/actions';

import '../styles/components/property.styles.css';
import { Menu, MenuItem, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from 'axios';

// axios.get(' https://airbnboptimalpricing.herokuapp.com/api/listings', {
// 	headers: {
// 		Authorization:
// 			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMCwiZW1haWwiOiJ0ZXN0RW1haWxAc29tZUVtYWlsLmNvbSIsImlhdCI6MTU5NjEyNzM3OSwiZXhwIjoxNTk2MTMwOTc5fQ.- d0v3sDdhMVJ5TiWzNQQYhh7kCPVu6v7_PDAohaGRNk'
// 	}
// });
const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 900,
		width: 800
	},
	media: {
		height: 500,
		maxHeight: 100,
		paddingTop: '56.25%' // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	typography: {
		color: '#757575',
		marginLeft: 20
	},
	typography_header: {
		color: 'black'
	}
}));

function Property({ property }) {
	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();
	const [ expanded, setExpanded ] = React.useState(false);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const { name, beds, bedrooms, bathrooms, description_len, property_type } = property;

	return (
		<Card className={classes.root}>
			<CardHeader
				action={
					<div className="menu">
						<MenuItem
							onClick={(e) => {
								return history.push(`/update-property/${property.id}`);
							}}
						>
							Edit
						</MenuItem>
						<MenuItem onClick={() => dispatch(deleteListing(property.id, history))}>Delete</MenuItem>
					</div>
				}
				// return history.push(`/update-property/${property.id}`)

				title={`${name} (${property_type})`}
				subheader={`${beds} beds - ${bedrooms} Bedrooms - ${bathrooms} bathrooms`}
			/>

			<CardMedia
				className="property-image"
				image="https://images.unsplash.com/photo-1593456552723-eeb2041c434e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
				title="Paella dish"
			/>

			{/* <Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu> */}
			<CardContent />
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>

				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography className={classes.typography_header} header>
						Description:
					</Typography>
					<Typography className={classes.typography} paragraph>
						{description_len}
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}

export default Property;
