import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux'
import { FormControl, Input, Typography as Text, Button } from '@material-ui/core';
import {loginUser} from '../../../store/actions/actions'

//change
export default ({comparePassword})=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const [userInput, setuserInput] = useState({email: '', password: ''});
    const error = useSelector(state => state.error);

// handling user input 
const onChangeHandler = (e)=>{
    setuserInput({...userInput,
    [e.target.name]: e.target.value
    })
}
// handling a submission 
const onSubmitHandler =(e)=>{
    e.preventDefault();
   dispatch(loginUser(userInput, history))
// comparePassword(userInput)
}

    return(

        <div style={{display: 'flex',
         justifyContent: 'center',
          marginTop: '15%',
           marginLeft: '38%',
           width: "24%",
           boxShadow: '7px 7px 8px 8px #888888'
           } }>
        
        
         {error && <div>{error.data.message}</div> }
            <FormControl >
            
            <Text>Don't have an Acount? <br/>
           <span style={{marginLeft: '30px'}}>
           <Link style={{textDecoration: 'none'}} to='/register'>
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