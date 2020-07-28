import React, { useState } from 'react';
import {Link , useHistory} from 'react-router-dom';
import { FormControl, Input, Container, Typography as Text, Button } from '@material-ui/core';

export default ({addToData})=>{
    const [acount, setacount]= useState({email: '', password: '', Cpassword: ''})


    // change handler 
   const onChangeHandler = (e)=>{
    setacount({
        ...acount,
  
        [e.target.name]: e.target.value
      });
   }
//form Handler 
let history =  useHistory()
const formHandler = (e)=>{
    e.preventDefault();
    if(acount.password === acount.Cpassword && acount.password.length > 5){
        addToData(acount)
        history.push('/login')
    } 
    else {
        document.getElementById('feedback').innerHTML='Please try again'
    }
  
}

    return(
<div>
<FormControl>
   <form onSubmit={e => formHandler(e)}>
   <Text>Already have an Acount?</Text>
   <Link to='/Login'>
   <Button>
   Login
   </Button>
   </Link>

   <br/>
   <Input type='text' name='email' id='email' placeholder="please enter email" value={acount.email} onChange={onChangeHandler}/>
   <br/>
   <Input type='password' name='password' id='password' placeholder="please enter password " value={acount.password} onChange={onChangeHandler}/>
   <br/>
   <Input type='password' name='Cpassword' id='Cpassword' placeholder="please confirm password " value={acount.Cpassword} onChange={onChangeHandler}/>
   <br/>
   <Button type='submit'>Sign up</Button>
   <div id="feedback"></div>
   </form>
   </FormControl>
</div>
 )
    
}