import React,{useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {getProperties} from '../store/actions/actions'
import { connect, useDispatch, useSelector } from 'react-redux'

import PropertyList from './PropertyList'

 function UserDashboard(props) {
   const listings = useSelector(state => state.listings);
   const dispatch = useDispatch()
   const history = useHistory()

  useEffect(()=>{
    //dispatch action from redux
    dispatch(getProperties(history))
  },[])

  return (
    <div className='user-dashboard'>
      <h1>Airbnb pricing calculator</h1>
      {listings.length < 1 && (
        <div className='user-dashboard-empty'>
          <h2>Looks like you don´t have any properties.</h2>
          <h2>Please Import a Property to see our pricing suggestion</h2>
          <Link to='/add-property'>Add Property</Link>
        </div>
      )}
      {
        listings.length >= 1 && (
          <PropertyList />
        )
      }
    </div>
  )
}


export default UserDashboard;