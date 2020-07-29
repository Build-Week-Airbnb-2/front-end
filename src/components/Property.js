import React from 'react';
import '../styles/components/property.styles.css';
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
  typography:{
    color: '#757575',
    marginLeft: 20
  },
  typography_header:{
    color: 'black'
  }
}));

function Property({ property }) {
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
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={`${name} (${property_type})`}
        subheader={`${beds} beds - ${bedrooms} Bedrooms - ${bathrooms} bathrooms`}
        
			/>
			<CardMedia
				className="property-image"
				image="https://images.unsplash.com/photo-1593456552723-eeb2041c434e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
				title="Paella dish"
			/>
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
          <Typography className={classes.typography_header} header>Description:</Typography>
          <Typography className={classes.typography} paragraph>{description_len}</Typography>
				</CardContent>
			</Collapse>
		</Card>
		// <h2></h2>
		// <div className='property'>
		//   <h5>Name</h5>
		//   <p>{property.name}</p>
		//   <h5>Description</h5>
		//   <p>{property.description_len}</p>
		//   <h5>Beds</h5>
		//   <p>{property.beds}</p>
		//   <h5>Bedrooms</h5>
		//   <p>{property.bedrooms}</p>
		//   <h5>Bathrooms</h5>
		//   <p>{property.bathrooms}</p>
		//   <h5>Type</h5>
		//   <p>{property.property_type}</p>
		// </div>
	);
}

export default Property;
