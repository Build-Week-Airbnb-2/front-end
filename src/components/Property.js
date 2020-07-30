import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';
import {deleteListing} from '../store/actions/actions'

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
import axios from 'axios'


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



// const values = {
//   host_about_len: 'My wife and I own this house and rent out the guest rooms on weekends',
//   description_len: 'A quiet house in north seattle',
//   property_type: 'House',
//   neighbourhood: 'Silver Lake',
//   city: 'Everett',
//   state: 'WA',
//   zipcode: '98208',
//   bathrooms: 1.75,
//   bedrooms: 3,
//   beds: 6,
//   accommodates: 6,
//   guests_included: 2,
//   square_feet: '1200',
//   cancellation_policy: 'moderate',
//   instant_bookable: 't',
//   is_business_travel_ready: 'f',
//   review_scores_rating: 90,
//   number_of_reviews: 4,
//   transit_len: 'There is a bus stop at the end of the street'
// }

function Property({ property }) {
	const history = useHistory();
  const dispatch = useDispatch()
	const classes = useStyles();
	const [ expanded, setExpanded ] = useState(false);
	const [price, setPrice] = useState(null)

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	useEffect(()=>{
			axios.post('https://ds-bw-airbnb-2.herokuapp.com/predict',property)
					.then(res=>{
						console.log(res);
						setPrice(res.data.predicted_price)
					})
					.catch(err =>{
						console.log(err.response);
					})
	},[])

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
			{ price && <CardHeader title={`Price Suggestion ${price}`} ></CardHeader> }
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
			<button onClick={()=>history.push(`/update-property/${property.id}`)}>Update</button>
      <button onClick={()=>dispatch(deleteListing(property.id,history))}>Delete</button>
		</Card>
	);
}

export default Property;
