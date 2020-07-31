import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateListing } from '../store/actions/actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Lottie from 'react-lottie';
import animationData from '../assets/lotties/spinner.json';
import First from './addproperty-components/first';
import Second from './addproperty-components/second';
import Third from './addproperty-components/third';
import Fourth from './addproperty-components/fourth';

const initialFormValues = {
	host_about_len: '',
	description_len: '',
	property_type: '',
	neighbourhood: '',
	city: '',
	state: '',
	zipcode: '',
	bathrooms: '',
	bedrooms: '',
	beds: '',
	accommodates: '',
	guests_included: '',
	square_feet: '',
	cancellation_policy: '',
	instant_bookable: '',
	is_business_travel_ready: '',
	review_scores_rating: '',
	number_of_reviews: '',
	transit_len: '',
	name: ''
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
	const listings = useSelector((state) => state.listings);
	const history = useHistory();
	const { id } = useParams();

	const changeHandler = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value
		});
	};

	const sumbitHandler = (e) => {
		e.preventDefault();
		dispatch(updateListing(id, formValues, history));
	};

	useEffect(() => {
		axiosWithAuth()
			.get(`/api/listings/${id}`)
			.then((res) => {
				setFormValues(res.data.listing);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}, []);

	let [ step, setStep ] = useState(1);

	const nextStep = () => {
		return setStep(step + 1);
	};

	const prevStep = () => {
		return setStep(step - 1);
	};

	switch (step) {
		case 1:
			return <First changeHandler={changeHandler} formValues={formValues} nextStep={nextStep} />;
		case 2:
			return (
				<Second changeHandler={changeHandler} formValues={formValues} prevStep={prevStep} nextStep={nextStep} />
			);
		case 3:
			return (
				<Third changeHandler={changeHandler} formValues={formValues} prevStep={prevStep} nextStep={nextStep} />
			);
		case 4:
			return (
				<Fourth
					changeHandler={changeHandler}
					formValues={formValues}
					prevStep={prevStep}
					submitHandler={sumbitHandler}
				/>
			);
	}
}
