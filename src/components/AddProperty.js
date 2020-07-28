import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const initialFormValues = {
  name: "",
  summary: "",
  city: "",
  state: "",
  country: "",
  bathrooms: "",
  bedrooms: "",
  beds: "",
  cancellation_policy: "",
  cleaning_fee: "",
};

export default function AddProperty() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const history = useHistory();

  const changeHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const addProperty = (e) => {
    e.preventDefault();
    // axiosWithAuth post call
    console.log("added property");
    setFormValues(initialFormValues);
    //send user back to dashboard
    history.push("/");
  };

  return (
    <div className="add-property-form">
      <h1>Add property component</h1>
      <form onSubmit={addProperty}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            value={formValues.name}
          />
        </label>
        <label>
          Summary
          <input
            type="text"
            name="summary"
            onChange={changeHandler}
            value={formValues.summary}
          />
        </label>
        <label>
          city
          <input
            type="text"
            name="city"
            onChange={changeHandler}
            value={formValues.city}
          />
        </label>
        <label>
          state
          <input
            type="text"
            name="state"
            onChange={changeHandler}
            value={formValues.state}
          />
        </label>
        <label>
          country
          <input
            type="text"
            name="country"
            onChange={changeHandler}
            value={formValues.country}
          />
        </label>
        <label>
          bathrooms
          <input
            type="text"
            name="bathrooms"
            onChange={changeHandler}
            value={formValues.bathrooms}
          />
        </label>
        <label>
          beds
          <input
            type="text"
            name="beds"
            onChange={changeHandler}
            value={formValues.beds}
          />
        </label>
        <label>
          cancellation_policy
          <input
            type="text"
            name="cancellation_policy"
            onChange={changeHandler}
            value={formValues.cancellation_policy}
          />
        </label>
        <label>
          cleaning_fee
          <input
            type="text"
            name="cleaning_fee"
            onChange={changeHandler}
            value={formValues.cleaning_fee}
          />
        </label>
        <button>Add Property</button>
      </form>
    </div>
  );
}
