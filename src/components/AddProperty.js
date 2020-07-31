import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPriceSuggestion, addListing } from '../store/actions/actions';
import Lottie from 'react-lottie';
import animationData from '../assets/lotties/spinner.json';
import First from './first';
import Second from './second'
import Third from './third'
import Fourth from './fourth'
// const initialFormValues = {
//   host_about_len: '',
//   description_len: '',
//   property_type: '',
//   neighbourhood: '',
//   city: '',
//   state: '',
//   zipcode: '',
//   bathrooms: '',
//   bedrooms: '',
//   beds: '',
//   accommodates: '',
//   guests_included: '',
//   square_feet: '',
//   cancellation_policy: '',
//   instant_bookable: '',
//   is_business_travel_ready: '',
//   review_scores_rating: '',
//   number_of_reviews:'' ,
//   transit_len: '',
//   name: '',
// };

const initialFormValues = {
	host_about_len: 'My wife and I own this house and rent out the guest rooms on weekends',
	description_len: 'A quiet house in north seattle',
	property_type: 'House',
	neighbourhood: 'Silver Lake',
	city: 'Everett',
	state: 'WA',
	zipcode: '98208',
	bathrooms: 1.75,
	bedrooms: 3,
	beds: 6,
	accommodates: 6,
	guests_included: 2,
	square_feet: '1200',
	cancellation_policy: 'moderate',
	instant_bookable: 't',
	is_business_travel_ready: 'f',
	review_scores_rating: 90,
	number_of_reviews: 4,
	transit_len: 'There is a bus stop at the end of the street!',
	name: 'Silver Lake House'
};

//lottie file options
const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
	}
};

export default function AddProperty() {
	const [ formValues, setFormValues ] = useState(initialFormValues);
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.loading);
	const history = useHistory();

	let [ step, setStep ] = useState(1);

	const nextStep = () => {
		return setStep(step + 1);
	};

	const prevStep = () => {
		return setStep(step - 1);
	};

	const changeHandler = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value
		});
	};

	const addProperty = (e) => {
		e.preventDefault();

		dispatch(addListing(formValues, history));
		// getting price suggestion from DS Model
		// dispatch(getPriceSuggestion(formValues, history));

		setFormValues(initialFormValues);
	};


	switch (step) {
		case 1:
			return <First nextStep={nextStep} changeHandler={changeHandler}/>;
		case 2:
			return <Second nextStep={nextStep} prevStep={prevStep}></Second>
		case 3: 
			return <Third nextStep={nextStep} prevStep={prevStep} changeHandler={changeHandler}></Third>
		case 4:
			return <Fourth prevStep={prevStep} changeHandler={changeHandler}></Fourth>
	}
}

// <div className="add-property-form">
//   <h1>Add property component</h1>
//   <form onSubmit={addProperty}>
//     <label>
//       Name
//       <input
//         type="text"
//         name="name"
//         onChange={changeHandler}
//         value={formValues.name}
//       />
//     </label>
//     <label>
//       Description
//       <input
//         type="text"
//         name="description_len"
//         onChange={changeHandler}
//         value={formValues.description_len}
//       />
//     </label>
//     <label>
//       Property Type
//       <input
//         type="text"
//         name="property_type"
//         onChange={changeHandler}
//         value={formValues.property_type}
//       />
//     </label>
//     <label>
//       About Host
//       <input
//         type="text"
//         name="host_about_len"
//         onChange={changeHandler}
//         value={formValues.host_about_len}
//       />
//     </label>
//     <label>
//       Neighbourhood
//       <input
//         type="text"
//         name="neighbourhood"
//         onChange={changeHandler}
//         value={formValues.neighbourhood}
//       />
//     </label>
//     <label>
//       City
//       <input
//         type="text"
//         name="city"
//         onChange={changeHandler}
//         value={formValues.city}
//       />
//     </label>
//     <label>
//       State
//       <input
//         type="text"
//         name="state"
//         onChange={changeHandler}
//         value={formValues.state}
//       />
//     </label>
//     <label>
//       zipcode
//       <input
//         type="text"
//         name="zipcode"
//         onChange={changeHandler}
//         value={formValues.zipcode}
//       />
//     </label>
//     <label>
//       bathrooms
//       <input
//         type="number"
//         name="bathrooms"
//         onChange={changeHandler}
//         value={formValues.bathrooms}
//       />
//     </label>
//     <label>
//       bedrooms
//       <input
//         type="number"
//         name="bedrooms"
//         onChange={changeHandler}
//         value={formValues.bedrooms}
//       />
//     </label>
//     <label>
//       beds
//       <input
//         type="number"
//         name="beds"
//         onChange={changeHandler}
//         value={formValues.beds}
//       />
//     </label>
//     <label>
//       accommodates
//       <input
//         type="number"
//         name="accommodates"
//         onChange={changeHandler}
//         value={formValues.accommodates}
//       />
//     </label>
//     <label>
//       guests included
//       <input
//         type="number"
//         name="guests_included"
//         onChange={changeHandler}
//         value={formValues.guests_included}
//       />
//     </label>
//     <label>
//       square feet
//       <input
//         type="text"
//         name="square_feet"
//         onChange={changeHandler}
//         value={formValues.square_feet}
//       />
//     </label>
//     <label>
//       cancellation policy
//       <input
//         type="text"
//         name="cancellation_policy"
//         onChange={changeHandler}
//         value={formValues.cancellation_policy}
//       />
//     </label>
//     <label>
//       instant bookable
//       <input
//         type="text"
//         name="instant_bookable"
//         onChange={changeHandler}
//         value={formValues.instant_bookable}
//       />
//     </label>
//     <label>
//       business travel ready
//       <input
//         type="text"
//         name="is_business_travel_ready"
//         onChange={changeHandler}
//         value={formValues.is_business_travel_ready}
//       />
//     </label>
//     <label>
//       review scores rating
//       <input
//         type="number"
//         name="review_scores_rating"
//         onChange={changeHandler}
//         value={formValues.review_scores_rating}
//       />
//     </label>
//     <label>
//       number of reviews
//       <input
//         type="number"
//         name="number_of_reviews"
//         onChange={changeHandler}
//         value={formValues.number_of_reviews}
//       />
//     </label>
//     <label>
//       transit
//       <input
//         type="text"
//         name="transit_len"
//         onChange={changeHandler}
//         value={formValues.transit_len}
//       />
//     </label>
//     {!loading ? (
//       <button>Add Property</button>
//     ) : (
//       <Lottie
//         className="loading"
//         options={defaultOptions}
//         height={100}
//         width={100}
//       />
//     )}
//   </form>
// </div>
