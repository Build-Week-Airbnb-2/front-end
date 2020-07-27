import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { FormControl, Input, Typography as Text, Button } from '@material-ui/core';

export default ({comparePassword})=>{
const [userInput, setuserInput] = useState({email: '', password: ''});

// handling user input 
const onChangeHandler = (e)=>{
setuserInput({...userInput,
[e.target.name]: e.target.value
})
}
// handling a submission 
const onSubmitHandler =(e)=>{
e.preventDefault();
comparePassword(userInput)
}

    return(

        <div style={{display: 'flex',
         justifyContent: 'center',
          marginTop: '15%',
           marginLeft: '38%',
           borderTop: 'dashed 1px red',
           borderBottom: 'dashed 1px blue',
           borderRight: 'dashed 1px black',
           borderLeft: 'dashed 1px black',
           width: "24%",
           boxShadow: '10px 10px 8px #888888'
           } }>
        
        
              
            <FormControl >
            <Text>Don't have an Acount? <br/>
           <span style={{marginLeft: '30px'}}>
           <Link style={{textDecoration: 'none'}} to='/'>
           <Button color="primary" variant="outlined" size="medium">Register</Button></Link>
            </span>
           </Text>
          
            <br/>
                <form>
                <Input color='secondary' placeholder='email' type='text' name='email' id='email' value={userInput.email} onChange={onChangeHandler}/><br/>
                <Input placeholder='password' type='password' name='password' id='password' value={userInput.password} onChange={onChangeHandler}/>
                <br/>
                <div style={{marginLeft: '27%', marginTop: '1%'}}><Button onClick={(e)=>{onSubmitHandler(e)}} color="secondary" size="large" >Login</Button></div>
                </form>
            </FormControl>
           
        </div>
        
    )
}