import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getProperties} from '../store/actions/actions'
import { connect } from 'react-redux'

import PropertyList from './PropertyList'

 function UserDashboard(props) {

  useEffect(()=>{
    getProperties()
  })

  return (
    <div className='user-dashboard'>
      <h1>Airbnb pricing calculator</h1>
      {!props.hasProperties && (
        <div className='user-dashboard-empty'>
          <h2>Looks like you don´t have any properties.</h2>
          <h2>Please Import a Property to see our pricing suggestion</h2>
          <Link to='/add-property'>Add Property</Link>
        </div>
      )}
      {
        props.hasProperties && (
          <PropertyList />
        )
      }
    </div>
  )
}


function mapStateToProps(state){
  return{
    hasProperties: state.hasProperties
  }
}

export default connect(mapStateToProps,{getProperties})(UserDashboard);