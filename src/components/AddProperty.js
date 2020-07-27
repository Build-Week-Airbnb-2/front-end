import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'

const initialFormValues ={
  address:'',
  bedrooms:'',
  baths:'',
  people: ''
}

export default function AddProperty() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const history = useHistory();

  const changeHandler = e =>{
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const addProperty = e =>{
    e.preventDefault()
    // axiosWithAuth post call
    console.log('added property');
    setFormValues(initialFormValues);
    //send user back to dashboard
    history.push('/')
  }

  return (
    <div>
      <h1>Add property component</h1>
      <form onSubmit={addProperty}>
        <label> Street Address
          <input type="text" name='address' onChange={changeHandler} value={formValues.address}/>
        </label>
        <label> Bedrooms
          <input type="number" name='bedrooms' onChange={changeHandler} value={formValues.bedrooms}/>
        </label>
        <label> Baths
          <input type="number" name='baths' onChange={changeHandler} value={formValues.baths}/>
        </label>
        <label> People
          <input type="number" name='people' onChange={changeHandler} value={formValues.people}/>
        </label>
        <button>Add Property</button>
      </form>
    </div>
  )
}
